package com.pms.issue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.issue.web.IssueDto;

@Mapper
public interface IssueMapper {

	List<IssueDto> selectIssue(String userId);
	
	Integer insertIssue(IssueDto issueDto);

}