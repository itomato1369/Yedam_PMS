package com.pms.home.dto;

import java.util.List;

import org.apache.ibatis.type.Alias;

import com.pms.home.memo.dto.HomeMemoDto;
import com.pms.home.notice.dto.HomeNoticeDto;
import com.pms.home.project.dto.HomeProjectDto;

@Alias("HomeDto")
public record HomeDto(
	List<HomeProjectDto> projects,
	List<HomeNoticeDto> notices,
	List<HomeMemoDto> memos
) {}
