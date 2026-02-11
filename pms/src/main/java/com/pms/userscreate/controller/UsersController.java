package com.pms.userscreate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pms.userscreate.dto.UsersCreateDto;
import com.pms.userscreate.service.UsersCreateService;

@Controller
public class UsersController {

	@Autowired
	UsersCreateService usersCreateService;

	@ResponseBody
	@GetMapping("/users")
	public List<UsersCreateDto> list() {
		return usersCreateService.findAll();

	}
	//등록처리
	@PostMapping("/users/create")
	public String create(UsersCreateDto usersCreateDto) {
		// Dto를 엔터티로 변환

		usersCreateService.registerUser(usersCreateDto);
		return "redirect:/users/new";
	}
	//등록페이지로 이동
	@GetMapping("/users/new")
	public String showCreateForm(Model model) {
		model.addAttribute("usersCreateDto", new UsersCreateDto());

		// "UsersCreate"라는 문자열을 반환하면
		// ViewResolver가 templates/UsersCreate.html 파일을 찾아서 보여줍니다.
		return "usersCreate";
	}
	@GetMapping("/users/check-id")
	@ResponseBody // 페이지 이동이 아닌 데이터(true/false)만 반환
	public boolean checkId(@RequestParam("userId") String userId) {
	    return usersCreateService.existsByUserId(userId);
	}
	
}
