package com.pms.setting.job.type.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.pms.setting.job.type.vo.JobTypeVO;

@Mapper
public interface JobTypeMapper {
    List<JobTypeVO> selectAllJobTypes();
    List<JobTypeVO> searchJobTypes(@Param("keyword") String keyword);
    void insertJobType(JobTypeVO vo);
    void deleteJobType(@Param("no") Long jobTypeNo);
}