package com.pms.project.dto;

import org.apache.ibatis.type.Alias;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Alias("ParentProjectDTO")
public class ParentProjectDTO {
	private final Integer projectNo;
	private String projectName;
}
