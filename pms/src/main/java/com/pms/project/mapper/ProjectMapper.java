package com.pms.project.mapper;

import com.pms.project.dto.ParentProjectDTO;
import com.pms.project.dto.ProjectInsertDTO;
import com.pms.project.dto.ProjectSearchDTO;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.pms.project.dto.ProjectSelectDTO;

@Mapper
public interface ProjectMapper {
    // 사용자의 프로젝트 목록 조회 (통계 포함)
    List<ProjectSelectDTO> selectAdminProjects();
    List<ProjectSelectDTO> selectUserProjects(@Param("userId") String userId);
    
    // 사용자의 검색결과를 바탕으로하는 프로젝트 목록 조회 (통계 포함) 
    List<ProjectSelectDTO> selectProjectsByOptions(ProjectSearchDTO searchDTO);
    List<ParentProjectDTO> selectParentProjects();
    
    // 프로젝트 code 중복 검사
    int selectByProjectCode(String projectCode);
    // 사용자의 입력값을 바탕으로 프로젝트 추가
    int insertProject(ProjectInsertDTO projectInsertDTO);
    
    
    // 프로젝트 개요 페이지 - 자식 하위 프로젝트 목록 조회(이름, 식별자, 상태)
    List<ProjectSelectDTO> selectFirstChildsByCode(@Param("projectCode") String projectCode, Integer active, Integer locked );
}