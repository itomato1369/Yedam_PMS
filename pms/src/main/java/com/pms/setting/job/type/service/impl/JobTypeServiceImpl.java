package com.pms.setting.job.type.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.job.type.mapper.JobTypeMapper;
import com.pms.setting.job.type.service.JobTypeService;
import com.pms.setting.job.type.vo.JobTypeVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JobTypeServiceImpl implements JobTypeService {
    private final JobTypeMapper jobTypeMapper;

    @Override
    public List<JobTypeVO> getList() { return jobTypeMapper.selectAllJobTypes(); }

    @Override
    public List<JobTypeVO> search(String keyword) {
        return (keyword == null || keyword.isBlank()) ? jobTypeMapper.selectAllJobTypes() : jobTypeMapper.searchJobTypes(keyword);
    }

    @Override
    public void remove(Long no) { jobTypeMapper.deleteJobType(no); }
    
    @Override
    @Transactional // 등록 과정 중 오류 발생 시 롤백을 위해 추가
    public void register(JobTypeVO vo) {
        jobTypeMapper.insertJobType(vo);
    }
}