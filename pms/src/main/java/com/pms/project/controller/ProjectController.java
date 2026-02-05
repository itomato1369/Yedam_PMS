package com.pms.project.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.pms.project.service.ProjectService;
import com.pms.project.service.ProjectVO;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ProjectController {
	private final ProjectService projectService;
		
	@GetMapping("/kanbantest")
	public String projectList(Model model) {
		List<ProjectVO> list = projectService.findAll();
		model.addAttribute("projects", list);
		return "backend";
	}
	
	@GetMapping("/temptest")
	public String template() {
		return "/project/project";
	}
}
