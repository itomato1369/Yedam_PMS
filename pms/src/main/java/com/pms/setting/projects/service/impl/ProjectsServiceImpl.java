package com.pms.setting.projects.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.projects.dto.SettingProjectDto;
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
    private final CommonRepository commonRepository;

    @Override
    public List<SettingProjectDto> getAllProjects() {
        // [수정] 전체 조회 시에도 삭제된(390) 프로젝트는 제외
        return projectsRepository.findAll().stream()
                .filter(p -> p.getStatus() == null || p.getStatus().getCommonNo() != 390L)
                .map(this::convertToDto)
                .toList();
    }

    @Override
    public List<CommonEntity> getStatusList() {
        return commonRepository.findByParentCommonNoAndDisplayYn(300L, "Y");
    }

    @Override
    public List<SettingProjectDto> searchProjects(Integer status, String keyword) {
        Long statusFilter = null;
        Integer publicYnFilter = null;

        if (status != null) {
            if (status == 310) publicYnFilter = 0;
            else if (status == 320) publicYnFilter = 1;
            else statusFilter = status.longValue();
        }

        return projectsRepository.search(statusFilter, publicYnFilter, keyword)
                .stream()
                .map(this::convertToDto)
                .toList();
    }

    @Override
    @Transactional
    public void logicalDelete(Long projectNo) {
        // 리포지토리에 정의한 업데이트 쿼리 호출
        projectsRepository.updateStatusToDelete(projectNo);
    }
    
    private SettingProjectDto convertToDto(ProjectsEntity p) {
        SettingProjectDto dto = new SettingProjectDto();
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
