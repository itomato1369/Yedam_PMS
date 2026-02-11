package com.pms.setting.roles.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

import com.pms.setting.roles.vo.RolesVO;

@Mapper
public interface RolesMapper {
	List<RolesVO> selectAllRoles();

	List<RolesVO> searchRoles(@Param("keyword") String keyword);

	void insertRole(RolesVO vo);

	void deleteRole(@Param("roleNo") Long roleNo);
}