package com.pms.setting.projects.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pms.common.ProjectStatus;
import com.pms.setting.projects.dto.ProjectDto;
import com.pms.setting.projects.service.ProjectsService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class ProjectsSettingController {

    private final ProjectsService projectsService; // Service만 주입받으면 됩니다.

    @GetMapping("/settings")
    public String projectList(Model model) {
        model.addAttribute("projects", projectsService.getAllProjects());
        
        // 💡 주입받을 필요 없이 Enum 클래스에서 직접 values()를 호출합니다.
        model.addAttribute("statusList", ProjectStatus.values()); 
        
        return "settings"; 
    }
    
 // API 부분에서도 ProjectStatus를 주입받을 필요가 없습니다.
    @GetMapping("/api/projects/search")
    @ResponseBody
    public List<ProjectDto> searchApi(
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String keyword
    ) {
        if (status != null || (keyword != null && !keyword.isBlank())) {
            return projectsService.searchProjects(status, keyword);
        } else {
            return projectsService.getAllProjects();
        }
    }
}