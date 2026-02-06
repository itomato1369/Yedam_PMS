package com.pms.setting.projects.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.common.ProjectStatus;
import com.pms.setting.projects.dto.ProjectDto;
import com.pms.setting.projects.entity.ProjectsEntity;
import com.pms.setting.projects.repository.ProjectsRepository;
import com.pms.setting.projects.service.ProjectsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectsServiceImpl implements ProjectsService {

    private final ProjectsRepository projectsRepository;

    @Override
    public List<ProjectDto> getAllProjects() {
        return projectsRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @Override
    public List<ProjectDto> searchProjects(Integer status, String keyword) {
        return projectsRepository.search(status, keyword)
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    private ProjectDto convertToDto(ProjectsEntity p) {

        ProjectDto dto = new ProjectDto();
        System.out.println("프로젝트 번호: " + p.getProjectNo() + ", DB 상태값: [" + p.getStatus() + "]");
        dto.setProjectNo(p.getProjectNo());
        dto.setProjectName(p.getProjectName());

        // 🔥 상태값 변환 (null 안전)
        dto.setStatusLabel(
                p.getStatus() != null
                        ? ProjectStatus.getLabel(p.getStatus())
                        : "미정"
        );

        // 🔥 공개 여부 (null 안전)
        dto.setPublicYnLabel(
                p.getPublicYn() != null && p.getPublicYn() == 1
                        ? "공개"
                        : "비공개"
        );

        dto.setCreateAt(p.getCreateAt());

        return dto;
    }
}

