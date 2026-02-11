package com.pms.work.dto;

import java.util.Date;

import org.apache.ibatis.type.Alias;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Alias("WorkReportDto")
public class WorkReportDto {
	private int level; // 계층 보여주는 레벨과 권한 정보
	private String userId;
	// 프로젝트 정보
	private Integer projectNo;
	private String projectName;
	// 일감정보 
	private Integer jobNo;
	private String title;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date startDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date endDate;
	// 작업분류
	private String workType;
	private String workers;
	private Integer workTime;
	// sql의 AS 별칭 붙인 값들
	private String workMonth;
	private String workWeek;
	private Integer realWorkTime; // 실제 근무한 시간
	private Integer workDays; // 근무 일수
	private Integer estimatedTime; // 근무시간 * 8
	private Integer averageTime; // 주,월 별 평균 시간
	
	

}
