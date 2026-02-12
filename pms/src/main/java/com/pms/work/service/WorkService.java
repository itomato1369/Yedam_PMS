package com.pms.work.service;

import java.util.List;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkReportDto;
import com.pms.work.dto.WorkSelectDto;
import com.pms.work.dto.WorkUpdateDto;

public interface WorkService {
	// 소요시간 전체 조회 + 조건 검색기능
	List<WorkSelectDto> findAllWorkEntries(WorkSelectDto workSelectDto);
	
	// 수정페이지 화면 단건조회
	WorkUpdateDto findWorkEntriesByNo(WorkUpdateDto workUpdateDto);
	
	// 소요시간 등록 매개변수 타입은 WorkInsertDto
	void addWorkEntries(WorkInsertDto workInsertDto);
	
	// 소요시간 수정 매개변수 타입은 WorkUpdateDto
	void modifyWorkEntries(WorkUpdateDto workUpdateDto);
	
	// 작업분류 조회
	List<WorkDetailsDto> findWorkDetails();
	
    // 통합 보고서 조회 Method 
	// type 은 일감, 프로젝트, 사용자, 주,월별
	List<WorkReportDto> findWorkReport(String type, WorkSelectDto workSelectDto);

}
