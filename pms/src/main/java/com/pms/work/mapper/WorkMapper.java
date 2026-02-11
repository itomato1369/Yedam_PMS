package com.pms.work.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkReportDto;
import com.pms.work.dto.WorkSelectDto;
import com.pms.work.dto.WorkUpdateDto;


@Mapper
public interface WorkMapper {
	// 소요시간 전체 조회 + 검색조건 추가 후 조회
	List<WorkSelectDto> selectWorkEntries(WorkSelectDto workSelectDto);
	
	// 소요시간 수정을 위한 상세조회 단건조회 List안쓴다
	WorkUpdateDto selectWorkEntriesByNo(WorkUpdateDto workUpdateDto);
	
	// 소요시간 등록 매개변수 타입이 WorkInsertDto  insert된 row 행의 개수
	int insertWorkEntries(WorkInsertDto workInsertDto);
	
	// 소요시간 수정 
	int updateWorkEntries(WorkUpdateDto workUpdateDto);
	
	// 작업시간 분류 조회
	List<WorkDetailsDto> selectWorkDetails();
	
	// 일감별 소요시간 보고서
	List<WorkReportDto> selectJobReport(WorkSelectDto workSelectDto);
	// 프로젝트별 소요시간 보고서
	List<WorkReportDto> selectProjectReport(WorkSelectDto workSelectDto);
	// 사용자별 소요시간 보고서
	List<WorkReportDto> selectUserReport(WorkSelectDto workSelectDto);
	// 프로젝트 주별 소요시간 보고서
	List<WorkReportDto> selectWeekReport(WorkSelectDto workSelectDto);
	// 프로젝트 월별 소요시간 보고서
	List<WorkReportDto> selectMonthReport(WorkSelectDto workSelectDto);
}
