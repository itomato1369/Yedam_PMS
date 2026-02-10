package com.pms.home.memo.dto;

import java.time.LocalDateTime;

import org.apache.ibatis.type.Alias;

@Alias("HomeMemoDto")
public record HomeMemoDto(
	Integer memoNo, 
	String content, 
	LocalDateTime addDate,
	String userId
) {}
