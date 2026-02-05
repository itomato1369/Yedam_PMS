package com.pms.home.notice.dto;

import java.time.LocalDateTime;

import org.apache.ibatis.type.Alias;

@Alias("HomeNoticeDto")
public record HomeNoticeDto(
	Integer noticeNo, 
	String title,
	LocalDateTime addDate
) {}
