package com.pms.project.dto;

public enum ProjectStatus {
	ACTIVE   (330, "진행중"),
	PAUSED   (340, "중단"),
	LOCKED   (350, "잠금보관"),
	FINISHED (360, "종료"),
	REMOVED  (390, "삭제");
	

	 private final Integer code;
	 private final String title;
	
	 ProjectStatus(Integer code, String title) {
	     this.code = code;
	     this.title = title;
	 }
	
	 public Integer getCode() { return code; }
	 public String getTitle() { return title; }
}