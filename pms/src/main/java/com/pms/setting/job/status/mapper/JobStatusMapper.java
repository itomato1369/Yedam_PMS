//package com.pms.setting.job.status.mapper;
//
//import java.util.List;
//
//import org.apache.ibatis.annotations.Mapper;
//import org.springframework.data.repository.query.Param;
//
//import com.pms.setting.job.status.vo.JobStatusVO;
//
//@Mapper
//public interface JobStatusMapper {
//    List<JobStatusVO> selectAll();
//    List<JobStatusVO> search(@Param("keyword") String keyword);
//    void delete(@Param("no") Long jobStatusNo);
//}