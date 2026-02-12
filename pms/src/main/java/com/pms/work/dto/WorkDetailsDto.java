package com.pms.work.dto;

import org.apache.ibatis.type.Alias;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Alias("WorkDetailsDto")
public class WorkDetailsDto {
	private int workDetailsNo; // 작업 분류 번호 (PK)
    private String workType;    // 작업 유형 (예: 개발, 테스트 등)

}
