package com.pms.home.notice.dto;

import java.time.LocalDateTime;

import org.apache.ibatis.type.Alias;

@Alias("HomeNoticeDto")
public record HomeNoticeDto(
    Integer noticeNo,
    String title,
    String content,
    Integer privacySettings,
    String userId,
    Integer filesNo,
    LocalDateTime addDate
) {}