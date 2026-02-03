package com.pms.project.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.project.mapper.ProjectMapper;
import com.pms.project.service.ProjectService;
import com.pms.project.service.ProjectVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
	private final ProjectMapper projectMapper;

	@Override
	public List<ProjectVO> findAll() {
		return projectMapper.selectAll();
	}

}
