package com.pms.issue.web;

import java.util.Date;

import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

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
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date addDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date startDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date endDate;
	private Integer progress;
	private String userId;
	private String username;
	private Integer jobTypeNo;
	private String jobType;
	private Integer jobStatusNo;
	private String jobStatus;
	private Integer projectNo;
	private String projectCode;
	private Integer parentJobNo;
	private Integer filesNo;
    private Integer commonNo;
    private String commonName;
    
    // 히스토리
    private Integer historyNo;
    private String comment;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date historyDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date deleteDate;
    
}
