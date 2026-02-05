package com.pms.user.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pms.user.entity.UserEntity;
import com.pms.user.service.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {

	private final UserService userService;

	// 유저 등록
	@GetMapping("/newUser")
	public String newUserForm(Model model) {
		model.addAttribute("userDto", new UserDto());
		return "user/registerForm";
	}

	@PostMapping("/newUser")
	public String register(@Valid @ModelAttribute("userDto") UserDto userDto, BindingResult bindingResult) {

		if (bindingResult.hasErrors()) {
			return "user/registerForm";
		}

		try {
			userService.register(userDto);
		} catch (Exception e) {
			bindingResult.rejectValue("userId", "newUserErr", e.getMessage());
			return "user/registerForm";
		}
		return "redirect:/";
	}

	// 로그인
	@GetMapping("/login")
	public String loginForm(Model model) {
		model.addAttribute("loginDto", new LoginDto());
		return "user/loginForm";
	}

	@PostMapping("/login")
	public String login(@Valid @ModelAttribute("loginDto") LoginDto loginDto, BindingResult bindingResult,
			HttpSession session) {

		if (bindingResult.hasErrors()) {
			return "user/loginForm";
		}

		try {
			UserEntity user = userService.login(loginDto.getUserId(), loginDto.getPassword());

			session.setAttribute("LOGIN_USER_ID", user.getUserId());
			session.setAttribute("LOGIN_ADMIN", user.getAdmin());
			return "redirect:/";
		} catch (Exception e) {
			bindingResult.reject("loginErr", e.getMessage());
			return "user/loginForm";
		}
	}

	// 로그아웃
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect:/user/login";
	}
}
