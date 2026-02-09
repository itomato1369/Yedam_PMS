package com.pms.work.dto;

import org.apache.ibatis.type.Alias;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Alias("WorkDetailsDto")
public class WorkDetailsDto {
	private Integer workDetailsNo;
	private String workType;

}
