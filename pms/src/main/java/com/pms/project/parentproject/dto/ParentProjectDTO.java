package com.pms.project.parentproject.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class ParentProjectDTO {
	private final Integer projectNo;
	private String projectName;
}
