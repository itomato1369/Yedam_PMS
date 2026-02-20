package com.pms.work.dto;

import java.util.Date;

import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Alias("WorkUpdateDto")
public class WorkUpdateDto {
	// WorkInsertDto와 다른 점이 work_entries의 PK가 필요함 수정을 해야 하니까
	private Integer  workEntriesNo;
	private Integer jobNo; // 수정불가 정보만 가지고 옴
	private String workers; // 수정불가 정보만 가지고 옴
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date workDate; 
	private Integer workTime;
	private String workContent;
	private Integer workDetailsNo;
	private String workType;
	private Integer projectNo;
	private String projectName;
	

}
