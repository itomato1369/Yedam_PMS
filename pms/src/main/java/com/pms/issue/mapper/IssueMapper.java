package com.pms.issue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.issue.web.IssueDto;
import com.pms.issue.web.IssueFileDetailsDto;
import com.pms.issue.web.IssueFileUploadDto;
import com.pms.issue.web.projectIssueDto;

@Mapper
public interface IssueMapper {

	List<IssueDto> selectIssue(String userId);
	
	// 테스트
	List<projectIssueDto>selectProjectIssue(String userId);              

	Integer insertIssue(IssueDto issueDto);

	Integer insertIssueFile(IssueFileUploadDto fileUploadDto);

	Integer insertIssueFileDetails(IssueFileDetailsDto fileDetailsDto);
}
