package com.pms.home.project.dto;

import org.apache.ibatis.type.Alias;

@Alias("HomeProjectDto")
public record HomeProjectDto (
	Integer projectNo,
	String projectName,
	String projectDesc,
	String projectCode
) {}
