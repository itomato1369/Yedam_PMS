package com.pms.setting.projects.service;

import java.util.List;

import com.pms.setting.projects.dto.ProjectDto;
import com.pms.setting.projects.entity.CommonEntity;

public interface ProjectsService {
    List<ProjectDto> getAllProjects();
    
    List<ProjectDto> searchProjects(Integer status, String keyword);
    
    List<CommonEntity> getStatusList();
}