package com.pms.work.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.work.dto.WorkInsertDto;
import com.pms.work.mapper.WorkMapper;
import com.pms.work.service.WorkService;

import lombok.RequiredArgsConstructor;


@Service
// field에 final 있으면 생성자 주입
@RequiredArgsConstructor
public class WorkServiceImpl implements WorkService {
	// mapper와 연결
	private final WorkMapper workMapper;

	// 소요시간 등록
	@Override
	@Transactional
	public void registerWorkEntries(WorkInsertDto workInsertDto) {
		// 등록된 일감에 대한 소요시간만 작성할 수 있다
		if (workInsertDto.getJobId() == null) {
			/*
			 * IllegalArgumentException 적절하지 않은 인자(Argument) 전달 예외 메서드가 호출될 때, 전달된
			 * 매개변수(Parameter)의 값이 허용되는 범위나 조건에 맞지 않을 때 발생
			 */
			throw new IllegalArgumentException("일감 정보가 없습니다");
		}
		// 작업시간이 null이 아니면서 값을 0으로 입력했을 때
		if (workInsertDto.getWorkTime() != null && workInsertDto.getWorkTime() < 0) {
			throw new IllegalArgumentException("작업 시간은 0 이상이어야 합니다");
		}

		workMapper.insertWorkEntries(workInsertDto);

	}

}
