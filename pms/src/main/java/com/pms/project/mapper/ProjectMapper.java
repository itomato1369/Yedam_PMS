package com.pms.project.mapper;

import com.pms.project.dto.ParentProjectDTO;
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
}