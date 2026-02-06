package com.pms.project.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.project.dto.ProjectDTO;
import com.pms.project.mapper.ProjectMapper;
import com.pms.project.service.ProjectService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectMapper projectMapper;

    @Override
    @Transactional(readOnly = true)
    public List<ProjectDTO> getProjectList(String userId) {
        // 1. 매퍼를 통해 데이터베이스에서 집계 및 계층 데이터 조회
        List<ProjectDTO> projects = projectMapper.selectAllProjects(userId);
        // 2. 추가적인 비즈니스 가공이 필요한 경우 여기서 처리 (예: 특정 조건에 따른 리스트 필터링 등)
        return projects;
    }
}