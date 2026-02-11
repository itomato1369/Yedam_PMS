package com.pms.work.dto;

import java.util.Date;

import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
/*
 * Data라고 하면 toString , equals, hashCode, RequiredArgsConstructor 
 * 쓸데없이 다 생성해버려서 심각한 정보노출 위험
 * */
@Getter
@Setter
@Alias("WorkInsertDto")
public class WorkInsertDto {
	
	private Integer jobNo; // FK
	private String workers;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date workDate;
	private Integer workTime;
	private String workContent;
	private Integer workDetailsNo;

}
