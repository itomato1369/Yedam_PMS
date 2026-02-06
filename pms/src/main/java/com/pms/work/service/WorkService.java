package com.pms.work.service;

import com.pms.work.dto.WorkInsertDto;

public interface WorkService {
	// 소요시간 등록 매개변수 타입은 WorkInsertDto
	void registerWorkEntries(WorkInsertDto workInsertDto);

}
