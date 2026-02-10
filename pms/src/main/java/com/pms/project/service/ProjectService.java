package com.pms.project.service;

import com.pms.project.dto.ProjectSearchDTO;
import java.util.List;

import com.pms.project.dto.ProjectSelectDTO;
import com.pms.project.parentproject.dto.ParentProjectDTO;

/**
 * 프로젝트 관리 비즈니스 로직 인터페이스
 */
public interface ProjectService {
    /**
     * 사용자의 권한이 있는 모든 프로젝트 목록을 조회 (통계 및 하위 프로젝트 포함)
     * @param userId 현재 로그인한 사용자 ID
     * @return 프로젝트 목록
     */
    List<ProjectSelectDTO> findAdminProjects();
    List<ProjectSelectDTO> findUserProjects(String userId);
    
    List<ProjectSelectDTO> findProjectByOptions(ProjectSearchDTO searchDTO);
    
    List<ParentProjectDTO> findParentProjects();
}
