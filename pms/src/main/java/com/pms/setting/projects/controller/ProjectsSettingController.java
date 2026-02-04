package com.pms.setting.projects.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pms.setting.projects.service.ProjectsService;

@Controller
@RequiredArgsConstructor
@RequestMapping("/settings/projects")
public class ProjectsSettingController {

    private final ProjectsService projectService;

    @GetMapping
    public String projectList(Model model) {

        model.addAttribute("projects", projectService.getAllProjects());

        return "settings/project-list";  // templates/settings/project-list.html
    }
}
