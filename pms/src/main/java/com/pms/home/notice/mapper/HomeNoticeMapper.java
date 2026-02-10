package com.pms.home.notice.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.home.notice.dto.HomeNoticeDto;

@Mapper
public interface HomeNoticeMapper {
	List<HomeNoticeDto> findNotices();
}
