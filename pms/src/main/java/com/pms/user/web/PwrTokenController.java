package com.pms.user.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pms.user.service.PwrTokenService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/user")
public class PwrTokenController {

	private final PwrTokenService pwrTokenService;

	@GetMapping("/pw-reset-page")
	public String resetForm(Model model) {
		return "user/pw_reset_form";
	}

	// 이메일 발송
	@PostMapping("/pw-reset-send")
	public String sendResetMail(@RequestParam("userId") String userId, Model model) {
		try {
			pwrTokenService.sendResetMail(userId);
			model.addAttribute("msg", "재설정 메일이 발송되었습니다. 유효 시간은 5분입니다.");
			return "user/login";
		} catch (Exception e) {
			model.addAttribute("error", "존재하지 않는 사용자입니다.");
			return "user/pw_reset_form";
		}
	}

	// 이메일 링크
	@GetMapping("/pw-reset-link")
	public String checkToken(@RequestParam("token") String token, Model model) {
		boolean checkedToken = pwrTokenService.checkToken(token);

		if (!checkedToken) {
			model.addAttribute("error", "유효하지 않거나 만료된 토큰입니다.");
			return "user/error_page";
		}

		model.addAttribute("token", token);
		return "user/new-pw-form";
	}

}
