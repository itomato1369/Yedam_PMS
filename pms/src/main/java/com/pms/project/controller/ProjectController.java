package com.pms.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.pms.project.service.ProjectService;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ProjectController {
    
    // 인터페이스 타입으로 주입받아 결합도를 낮춤
    private final ProjectService projectService;

    @GetMapping("/projects")
    public String listProjects(Model model) {
        // 실제 운영 시에는 세션 또는 SecurityContext에서 userId를 가져옴
        String currentUserId = "user01"; 
        
        model.addAttribute("projects", projectService.getProjectList(currentUserId));
        
        return "project/list";
    }
}