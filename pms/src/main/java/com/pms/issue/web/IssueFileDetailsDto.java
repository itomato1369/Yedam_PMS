package com.pms.issue.web;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Data
@Alias("IssueFileDetailsDto")
public class IssueFileDetailsDto {
	private Integer detailsNo;
	private Integer filesNo;
	private String filesName;
	private Long filesSize;
	private String filesType;
	private String filesPath;
}
