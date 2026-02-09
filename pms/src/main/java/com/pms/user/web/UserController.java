package com.pms.user.web;

import org.springframework.security.core.Authentication;
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
	public String login(Model model, Authentication authentication) {
		// 로그인했다면 메인으로
		if (authentication != null && authentication.isAuthenticated()) {
			return "redirect:/";
		}
		model.addAttribute("loginDto", new LoginDto());
		return "user/loginForm";
	}
}
