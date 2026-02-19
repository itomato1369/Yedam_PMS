package com.pms.setting.roles.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.setting.roles.mapper.RolesMapper;
import com.pms.setting.roles.service.RolesService;
import com.pms.setting.roles.vo.RolesVO;

import lombok.RequiredArgsConstructor;

	@Service
	@RequiredArgsConstructor
	public class RolesServiceImpl implements RolesService {

	    private final RolesMapper rolesMapper;

	    @Override
	    public List<RolesVO> getAllRoles() {
	        return rolesMapper.selectAllRoles();
	    }

	    @Override
	    public List<RolesVO> searchRoles(String keyword) {
	        // 키워드가 비어있으면 전체 조회로 유도 (UX 최적화)
	        if (keyword == null || keyword.isBlank()) {
	            return rolesMapper.selectAllRoles();
	        }
	        return rolesMapper.searchRoles(keyword);
	    }
	    
	    @Override
	    public void register(RolesVO vo) {
	        rolesMapper.insertRole(vo);
	    }
	    
	    @Override
	    public void removeRole(Long roleNo) {
	        rolesMapper.deleteRole(roleNo);
	    }
	}