package com.pms.project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute; // 추가

import com.pms.project.common.mapper.ProjectCommonStatusMapper;
import com.pms.project.dto.ProjectSearchDTO; // 추가
import com.pms.project.service.ProjectService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class ProjectController {
    
    // 인터페이스 타입으로 주입받아 결합도를 낮춤
    private final ProjectService projectService;
    private final ProjectCommonStatusMapper projectCommonStatusMapper;
    
    @GetMapping("/projects")
    public String listProjects(Model model, @ModelAttribute ProjectSearchDTO searchDTO) {
        // 실제 운영 시에는 세션 또는 SecurityContext에서 userId를 가져옴
        String currentUserId = "song";
        
        // 검색 조건이 있는지 확인 (projectName, projectStatus, projectAssignee 중 하나라도 값이 있으면 검색 조건으로 간주)
        boolean hasSearchCriteria = searchDTO.getProjectName() != null && !searchDTO.getProjectName().isEmpty() ||
                                    searchDTO.getProjectStatus() != null ||
                                    searchDTO.getProjectAssignee() != null && !searchDTO.getProjectAssignee().isEmpty();

        if (hasSearchCriteria) {
            // 검색 조건이 있으면 검색 결과 반환
            // 현재 로그인 사용자 ID를 searchDTO에 추가하여 쿼리에서 활용 (예: has_login_user_joined 필드)
            searchDTO.setCurrentUserId(currentUserId); // ProjectSearchDTO에 currentUserId 필드 추가 필요
            model.addAttribute("projects", projectService.findProjectByOptions(searchDTO));
        } else {
            // 검색 조건이 없으면 사용자 프로젝트 전체 목록 반환
            model.addAttribute("projects", projectService.findUserProjects(currentUserId));
        }
        
        model.addAttribute("commons" , projectCommonStatusMapper.selectProjectCommonStatusAll());
        model.addAttribute("searchDTO", searchDTO); // 검색 폼의 값 유지를 위해 모델에 추가
        
        return "project/list";
    }
}