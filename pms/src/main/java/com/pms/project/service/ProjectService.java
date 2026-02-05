package com.pms.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.project.dto.ProjectDTO;
import com.pms.project.mapper.ProjectMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectService {
	private final ProjectMapper projectMapper;
	
	public List<ProjectDTO> loadProjectPage() {
		List<ProjectDTO> list = projectMapper.selectAll();
		return list;
	}
}
