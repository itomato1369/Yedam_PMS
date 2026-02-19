package com.pms.issue.web;

import java.time.LocalDateTime;
import java.util.List;

import org.apache.ibatis.type.Alias;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Alias("IssueFileUploadDto")
public class IssueFileUploadDto {
	private Integer filesNo;
	private Integer jobNo;
	private String userId;
	private LocalDateTime uploadDate;
	@JsonIgnore
	private List<MultipartFile> actualFiles;

	// 파일 상세내용
	private IssueFileDetailsDto fileDetails;

}
