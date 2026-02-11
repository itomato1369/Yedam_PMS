package com.pms.setting.job.status.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.data.repository.query.Param;

import com.pms.setting.job.status.vo.JobStatusVO;

@Mapper
public interface JobStatusMapper {
	// selectAll -> selectAllJobStatus 로 변경
	List<JobStatusVO> selectAllJobStatus();

	// search -> searchJobStatus 로 변경
	List<JobStatusVO> searchJobStatus(@Param("keyword") String keyword);

	void insertJobStatus(JobStatusVO vo);
	
	void delete(@Param("no") Long jobStatusNo);
}