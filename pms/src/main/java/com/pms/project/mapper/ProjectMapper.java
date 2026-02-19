package com.pms.project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.pms.project.dto.JobDTO;
import com.pms.project.dto.MemberDTO;
import com.pms.project.dto.NoticeDTO;
import com.pms.project.dto.ParentProjectDTO;
import com.pms.project.dto.ProjectInsertDTO;
import com.pms.project.dto.ProjectSearchDTO;
import com.pms.project.dto.ProjectSelectDTO;

@Mapper
public interface ProjectMapper {
    // 사용자의 프로젝트 목록 조회 (통계 포함)
    List<ProjectSelectDTO> selectAdminProjects();
    List<ProjectSelectDTO> selectUserProjects(@Param("userId") String userId);
    
    // 사용자의 검색결과를 바탕으로하는 프로젝트 목록 조회 (통계 포함) 
    List<ProjectSelectDTO> selectProjectsByOptions(ProjectSearchDTO searchDTO);
    List<ParentProjectDTO> selectParentProjects();
    
    // 조회 가속을 위한 메서드 추가 (List<Integer>를 파라미터로 받음)
    List<JobDTO> selectJobsByProjectNos(@Param("projectNos") List<Integer> projectNos);
    List<MemberDTO> selectMembersByProjectNos(@Param("projectNos") List<Integer> projectNos);
    
    // 프로젝트 code 중복 검사
    int selectByProjectCode(String projectCode);
    // 사용자의 입력값을 바탕으로 프로젝트 추가
    int insertProject(ProjectInsertDTO projectInsertDTO);
    
    
    // 프로젝트 개요 페이지 
    // 하위 프로젝트 목록 조회(이름, 식별자, 상태)
    List<ProjectSelectDTO> selectFirstChildsByCode(@Param("projectCode") String projectCode, Integer active, Integer locked );
    
    // 최신 공지사항 목록 조회
    List<NoticeDTO> selectNotices();
    
}