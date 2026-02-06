package com.pms.setting.projects.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.setting.projects.dto.ProjectDto;
import com.pms.setting.projects.entity.CommonEntity;
import com.pms.setting.projects.entity.ProjectsEntity;
import com.pms.setting.projects.repository.CommonRepository;
import com.pms.setting.projects.repository.ProjectsRepository;
import com.pms.setting.projects.service.ProjectsService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectsServiceImpl implements ProjectsService {

    private final ProjectsRepository projectsRepository;
    // 1. 공통 코드 조회를 위한 레포지토리를 반드시 추가해야 합니다!
    private final CommonRepository commonRepository; 

    @Override
    public List<ProjectDto> getAllProjects() {
        return projectsRepository.findAll()
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @Override
    public List<ProjectDto> searchProjects(Integer status, String keyword) {
        Long statusLong = (status != null) ? status.longValue() : null;
        return projectsRepository.search(statusLong, keyword)
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    // 2. 컨트롤러에서 에러 났던 그 메서드를 여기에 구현합니다.
    @Override
    public List<CommonEntity> getStatusList() {
        // 프로젝트 상태 코드(예: 부모번호가 100번인 것들)만 가져오려면 
        // commonRepository.findByParentCommonNo(100L) 처럼 쓰시면 됩니다.
        return commonRepository.findAll(); 
    }

    private ProjectDto convertToDto(ProjectsEntity p) {
        ProjectDto dto = new ProjectDto();
        dto.setProjectNo(p.getProjectNo());
        dto.setProjectName(p.getProjectName());
        dto.setCreateAt(p.getCreateAt());
        
        dto.setPublicYn(p.getPublicYn());
        dto.setPublicYnLabel(p.getPublicYn() != null && p.getPublicYn() == 1 ? "공개" : "비공개");

        if (p.getStatus() != null) {
            dto.setStatusValue(p.getStatus().getCommonNo().intValue()); 
            dto.setStatusLabel(p.getStatus().getCommonName());
        } else {
            dto.setStatusLabel("미정");
        }

        return dto;
    }
}

