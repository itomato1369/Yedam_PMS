package com.pms.issue.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.pms.files.service.FilesUploadService;
import com.pms.issue.mapper.IssueMapper;
import com.pms.issue.web.IssueDto;
import com.pms.issue.web.projectIssueDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IssueService {

	private final FilesUploadService filesUploadService;
	private final IssueMapper issueMapper;

	// 일감 리스트
	public List<IssueDto> findIssueList(String userId) {
		List<IssueDto> issueList = issueMapper.selectIssue(userId);
		System.out.println(issueList.toString());
		return issueList;
	}

	// 일감 리스트 테스트
	public List<projectIssueDto> findProjectIssueList(String userId) {
		List<projectIssueDto> issueList = issueMapper.selectProjectIssue(userId);
		return issueList;
	}

	// 일감 등록
	@Transactional
	public Integer addIssue(IssueDto issueDto, List<MultipartFile> files) {
		if (!StringUtils.hasText(issueDto.getTitle())) {
			throw new RuntimeException("제목은 필수 입력 사항입니다.");
		}

		try {
			String userId = issueDto.getUserId();
			Integer filesNo = filesUploadService.uploadFiles(files, userId);
			issueDto.setFilesNo(filesNo);
		} catch (Exception e) {
			throw new RuntimeException("파일 저장 중 에러가 발생하였습니다.");
		}

		issueMapper.insertIssue(issueDto);
		Integer jobNo = issueDto.getJobNo();

		return jobNo;
	}

}
