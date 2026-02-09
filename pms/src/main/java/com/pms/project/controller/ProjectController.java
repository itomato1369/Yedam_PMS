package com.pms.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.pms.project.common.mapper.ProjectCommonStatusMapper;
import com.pms.project.service.ProjectService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ProjectController {
    
    // 인터페이스 타입으로 주입받아 결합도를 낮춤
    private final ProjectService projectService;
    private final ProjectCommonStatusMapper projectCommonStatusMapper;
    
    @GetMapping("/projects")
    public String listProjects(Model model) {
        // 실제 운영 시에는 세션 또는 SecurityContext에서 userId를 가져옴
        String currentUserId = "song";
        // 관리자인 경우 관리자용 매퍼 조회쿼리 / 관리자가아니면 userid 써서 조회하는쿼리
		/*
		 * if ("내가관리자라면".equals("asdfsdaf")) {
		 * 
		 * }else { model.addAttribute("projects",
		 * projectService.findProjectList(currentUserId)); }
		 */
        model.addAttribute("projects", projectService.findProjectList(currentUserId));
        model.addAttribute("commons" , projectCommonStatusMapper.selectProjectCommonStatusAll());
        
        return "project/list";
    }
}