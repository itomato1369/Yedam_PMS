package com.pms.project.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.pms.project.dto.ProjectDTO;
import com.pms.project.service.ProjectService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ProjectController {
	private final ProjectService projectService;
	
	@GetMapping("/project")
	public String ProjectList(Model model) {
		List<ProjectDTO> list = projectService.loadProjectPage();
		model.addAttribute("projects", list);
		return "/project/project";
	}
}
