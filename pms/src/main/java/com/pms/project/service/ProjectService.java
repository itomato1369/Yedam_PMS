	package com.pms.project.service;
	
	import java.util.List;
import java.util.Map;

import com.pms.project.dto.NoticeDTO;
import com.pms.project.dto.ParentProjectDTO;
import com.pms.project.dto.ProjectGMemberDTO;
import com.pms.project.dto.ProjectInsertDTO;
import com.pms.project.dto.ProjectSearchDTO;
import com.pms.project.dto.ProjectSelectDTO;
	
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
	    
	    boolean findByProjectCode(String projectCode);
	    boolean addProject(ProjectInsertDTO projectInsertDTO);
	    
	    // 개요페이지
	    Map<String, List<String>> findGroupMemberByCode(String projectCode);
	    List<NoticeDTO> findNoties();
	    List<ProjectSelectDTO> findFirstChildsByCode(String projectCode);
	}
