package com.pms.project.service;

import org.apache.ibatis.type.Alias;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Alias("ProjectVO")
@Getter
@Setter
@ToString
@EqualsAndHashCode
@NoArgsConstructor
public class ProjectVO {
	private Integer projectId;
}
