package com.pms.setting.job.type.service;

import java.util.List;
import com.pms.setting.job.type.vo.JobTypeVO;

public interface JobTypeService {
    List<JobTypeVO> getList();
    List<JobTypeVO> search(String keyword);
    void register(JobTypeVO vo);
    void remove(Long no);
}