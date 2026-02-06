package com.pms.setting.projects.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pms.setting.projects.dto.SettingProjectDto;
import com.pms.setting.projects.service.ProjectsService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class ProjectsSettingController {

    private final ProjectsService projectsService;

    @GetMapping("/settings")
    public String projectList(Model model) {
        model.addAttribute("projects", projectsService.getAllProjects());
        model.addAttribute("statusList", projectsService.getStatusList()); 
        return "settings"; 
    }
    
    @GetMapping("/api/projects/search")
    @ResponseBody
    public List<SettingProjectDto> searchApi(
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String keyword
    ) {
        return projectsService.searchProjects(status, keyword);
    }
    
    @DeleteMapping("/api/projects/{projectNo}")
    @ResponseBody
    public void deleteProject(@PathVariable Long projectNo) {
        projectsService.logicalDelete(projectNo);
    }
}