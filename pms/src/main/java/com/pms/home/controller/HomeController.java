package com.pms.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.pms.home.dto.HomeDto;
import com.pms.home.service.HomeService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class HomeController {
	private final HomeService homeService;

	@GetMapping("/home")
	public String home(Model model) {
		HomeDto dtoList = homeService.loadMainPage();
		model.addAttribute("list", dtoList);
		return "/home/home_index.html";
	}
}
