package com.pms.issue.web;

import java.time.LocalDateTime;
import java.util.List;

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

	// 첨부파일 DTO
	private List<IssueFileUploadDto> fileData;

}
