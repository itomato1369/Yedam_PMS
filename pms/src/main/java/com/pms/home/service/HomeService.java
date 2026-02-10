package com.pms.home.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.home.dto.HomeDto;
import com.pms.home.memo.mapper.HomeMemoMapper;
import com.pms.home.notice.mapper.HomeNoticeMapper;
import com.pms.home.project.mapper.HomeProjectMapper;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HomeService {
	private final HomeProjectMapper projectMapper;
	private final HomeNoticeMapper noticeMapper;
	private final HomeMemoMapper memoMapper;
	
	@Transactional(readOnly = true)
	public HomeDto loadMainPage(String userId) {
		var projects = projectMapper.findProjects(userId);
		var notices = noticeMapper.findNotices();
		var memos = memoMapper.findMemos(userId);
		return new HomeDto(projects, notices, memos);
	}
}
