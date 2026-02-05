package com.pms.setting.projects.service;

import java.util.List;

import com.pms.setting.projects.dto.ProjectDto;

public interface ProjectsService {
    List<ProjectDto> getAllProjects();
    
    List<ProjectDto> searchProjects(Integer status, String keyword);
}