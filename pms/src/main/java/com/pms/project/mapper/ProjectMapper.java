package com.pms.project.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.pms.project.dto.ProjectSelectDTO;

@Mapper
public interface ProjectMapper {
    // 사용자의 프로젝트 목록 조회 (통계 포함)
    List<ProjectSelectDTO> selectAdminProjects();
    List<ProjectSelectDTO> selectUserProjects(@Param("userId") String userId);
    
    
    List<ProjectSelectDTO> selectProjectsByOptions();
}