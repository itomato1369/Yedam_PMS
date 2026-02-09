package com.pms.project.common.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class ProjectCommonStatusDTO {
	private final int commonNo;
	private String    commonName;
	private String    commonDesc;
	private char      displayYn; // Y || N   
}
