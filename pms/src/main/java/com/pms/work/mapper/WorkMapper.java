package com.pms.work.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.pms.work.dto.WorkInsertDto;

@Mapper
public interface WorkMapper {
	// 소요시간 등록 매개변수 타입이 WorkInsertDto 
	// insert된 row 행의 개수
	int insertWorkEntries(WorkInsertDto workInsertDto);

}
