package com.pms.project.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ProjectSecurityMapper {
	int checkAuth(
		@Param("userId") String userId,
		@Param("projectCode") String projectCode,
		@Param("action") String action
		);
}
