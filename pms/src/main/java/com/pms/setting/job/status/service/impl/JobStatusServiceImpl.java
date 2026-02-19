package com.pms.setting.job.status.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.job.status.mapper.JobStatusMapper;
import com.pms.setting.job.status.service.JobStatusService;
import com.pms.setting.job.status.vo.JobStatusVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobStatusServiceImpl implements JobStatusService {
	private final JobStatusMapper jobStatusMapper;

	public List<JobStatusVO> getList() {
		return jobStatusMapper.selectAllJobStatus();
	}

	public List<JobStatusVO> search(String keyword) {
		return (keyword == null || keyword.isBlank()) ? jobStatusMapper.selectAllJobStatus()
				: jobStatusMapper.searchJobStatus(keyword);
	}

	@Override
	@Transactional
	public void register(JobStatusVO vo) {
		jobStatusMapper.insertJobStatus(vo);
	}

	public void remove(Long no) {
		jobStatusMapper.delete(no);
	}
}