package com.pms.project.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class ProjectDTO {
	private final int projectNo;             
	private String projectName; 
	/*
	 * private String userId; private String projectDesc; private String
	 * projectHome; private String projectCode;
	 */     
	/*
	 * --PROJECT_CODE VARCHAR2(255) --CREATE_AT TIMESTAMP(6) --UPDATE_AT
	 * TIMESTAMP(6) --PARENT_MEMBER_YN NUMBER(1) --PUBLIC_YN NUMBER(1) --STATUS
	 * NUMBER --PARENT_PROJECT_NO NUMBER
	 */
}
