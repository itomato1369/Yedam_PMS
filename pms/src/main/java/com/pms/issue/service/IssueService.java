package com.pms.issue.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.pms.issue.mapper.IssueMapper;
import com.pms.issue.web.IssueDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IssueService {

	private final IssueMapper issueMapper;

	// 일감 리스트
	public List<IssueDto> findIssueList(String userId) {
		List<IssueDto> issueList = issueMapper.selectIssue(userId);
		return issueList;
	}

	// 일감 등록
	public Integer addIssue(IssueDto issueDto) {
		if (!StringUtils.hasText(issueDto.getTitle())) {
			throw new RuntimeException("제목은 필수 입력 사항입니다.");
		}
		issueMapper.insertIssue(issueDto);
		return issueDto.getJobNo();
	}
}
