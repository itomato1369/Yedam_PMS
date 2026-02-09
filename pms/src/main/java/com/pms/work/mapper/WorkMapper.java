package com.pms.work.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkSelectDto;

@Mapper
public interface WorkMapper {
	// 소요시간 전체 조회
	List<WorkSelectDto> selectWorkEntries();
	
	// 소요시간 상세 조회
	List<WorkSelectDto> selectOne();
	
	
	// 소요시간 등록 매개변수 타입이 WorkInsertDto 
	// insert된 row 행의 개수
	int insertWorkEntries(WorkInsertDto workInsertDto);
	
	// 작업시간 분류 조회
	List<WorkDetailsDto> selectWorkDetails();

}
