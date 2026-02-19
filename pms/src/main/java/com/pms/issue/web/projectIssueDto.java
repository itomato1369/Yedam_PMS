package com.pms.issue.web;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Data;
@Data
@Alias("projectIssueDto")
public class projectIssueDto {
	private Integer jobNo;
	private String managerId;
	private Integer publicRole;
	private String title;
	private String content; 
	private Integer priority; 
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDate addDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDate startDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private LocalDate endDate;
	private Integer progress;
	private String userId;
	private Integer jobTypeNo;
	private Integer jobStatusNo;
	private Integer projectNo;
	private Integer parentJobNo;     
	
	

}
