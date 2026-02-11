package com.pms.setting.job.status.service;

import java.util.List;

import com.pms.setting.job.status.vo.JobStatusVO;

public interface JobStatusService {
    
    // 1. 전체 일감 상태 목록 조회
    List<JobStatusVO> getList();
    
    // 2. 키워드 검색 (상태명 검색)
    List<JobStatusVO> search(String keyword);
    
    // 3. 특정 일감 상태 삭제
    void remove(Long jobStatusNo);
    
    void register(JobStatusVO vo);
}