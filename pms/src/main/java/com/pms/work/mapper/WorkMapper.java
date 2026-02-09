package com.pms.work.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkSelectDto;


@Mapper
public interface WorkMapper {
	// 소요시간 전체 조회 + 검색조건 추가 후 조회
	List<WorkSelectDto> selectWorkEntries(WorkSelectDto workSelectDto);
	
	
	
	// 소요시간 등록 매개변수 타입이 WorkInsertDto 
	// insert된 row 행의 개수
	int insertWorkEntries(WorkInsertDto workInsertDto);
	
	// 작업시간 분류 조회
	List<WorkDetailsDto> selectWorkDetails();

}
