package com.pms.project.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProjectSecurityMapper {
	boolean checkAuth(
		@Param("userId") String userId,
		@Param("projectCode") String projectCode,
		@Param("action") String action
		);
	
	boolean checkPm(
			@Param("userId") String userId, 
			@Param("projectCode") String projectCode
			);
}
