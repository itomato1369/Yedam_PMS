package com.pms.work.service;

import java.util.List;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkSelectDto;

public interface WorkService {
	// 소요시간 전체 조회
	List<WorkSelectDto> findAllWorkEntries(WorkSelectDto workSelectDto);
	
	// 소요시간 등록 매개변수 타입은 WorkInsertDto
	void addWorkEntries(WorkInsertDto workInsertDto);
	
	// 작업분류 조회
	List<WorkDetailsDto> findWorkDetails();
	

}
