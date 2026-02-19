package com.pms.setting.projects.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.common.entity.CommonEntity;
import com.pms.setting.common.repository.CommonRepository;
import com.pms.setting.projects.dto.SettingProjectDto;
import com.pms.setting.projects.entity.ProjectsEntity;
import com.pms.setting.projects.repository.ProjectsRepository;
import com.pms.setting.projects.service.ProjectsService;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectsServiceImpl implements ProjectsService {
	
	@PersistenceContext
	private EntityManager em; // 엔티티 매니저 주입
    private final ProjectsRepository projectsRepository;
    private final CommonRepository commonRepository;

    @Override
    public List<SettingProjectDto> getAllProjects() {
        return projectsRepository.search(null, null, null)
                .stream()
                .map(this::convertToDto)
                .toList();
    }
    @Override
    public List<CommonEntity> getStatusList() {
        return commonRepository.findByParent_CommonNoAndDisplayYn(300L, "Y");
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
    public void toggleLock(Long projectNo, Integer targetStatus) {
        projectsRepository.updateProjectStatus(projectNo, targetStatus);
        // 영속성 컨텍스트 초기화 (최신 데이터 반영 보장)
        em.flush();
        em.clear();
    }
    
    @Override
    @Transactional
    public void logicalDelete(Long projectNo) {
        projectsRepository.updateStatusToDelete(projectNo);
        
        // [중요] 영속성 컨텍스트를 비워서 다음 조회 때 무조건 DB를 찌르게 함!
        em.flush();
        em.clear();
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
