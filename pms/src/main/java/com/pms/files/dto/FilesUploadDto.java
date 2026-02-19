package com.pms.files.dto;

import lombok.Data;

@Data
public class FilesUploadDto {
	private String orgName;
	private String fileUuid;
	private String filePath;
	private Long fileSize;
	private String fileType;
}
