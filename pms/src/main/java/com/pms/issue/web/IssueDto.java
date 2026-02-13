package com.pms.issue.web;

import java.time.LocalDateTime;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("IssueDto")
public class IssueDto {
	private Integer jobNo;
	private String managerId;
	private Integer publicRole;
	private String title;
	private String content; 
	private Integer priority; 
	private LocalDateTime addDate;
	private LocalDateTime startDate;
	private LocalDateTime endDate;
	private Integer progress;
	private String userId;
	private Integer jobTypeNo;
	private Integer jobStatusNo;
	private Integer projectNo;
	private Integer parentJobNo;
	private String projectName;
	private String jobStatusName;
	private String jobTypeName;
	private String priorityName;
	
}
