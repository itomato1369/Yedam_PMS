package com.pms.setting.projects.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.setting.projects.entity.ProjectsEntity;
import com.pms.setting.projects.repository.ProjectsRepository;
import com.pms.setting.projects.service.ProjectsService;

import lombok.RequiredArgsConstructor;
	
@Service
@RequiredArgsConstructor
public class ProjectsServiceImpl implements ProjectsService {

    private final ProjectsRepository projectRepository;

    @Override
    public List<ProjectsEntity> getAllProjects() {
        return projectRepository.findAll();
    }
}