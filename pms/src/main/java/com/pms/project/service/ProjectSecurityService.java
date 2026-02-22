package com.pms.project.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.project.mapper.ProjectSecurityMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProjectSecurityService {

	private final ProjectSecurityMapper projectSecurityMapper;

	@Transactional(readOnly = true)
	public boolean isAuth(String userId, String projectCode, String action) {
		if(projectSecurityMapper.checkPm(userId, projectCode)) {
			return true;
		}
		
		return projectSecurityMapper.checkAuth(userId, projectCode, action);
	}
}
