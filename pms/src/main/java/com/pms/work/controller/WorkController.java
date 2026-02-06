package com.pms.work.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.pms.work.dto.WorkInsertDto;
import com.pms.work.service.WorkService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class WorkController {
	private final WorkService workService;

	// 소요시간 등록 화면
	@GetMapping("/workinsert")
	public String workInsertPage() {
		return "work/work_insert";
	}

	// 기능
	@PostMapping("/workinsert")
	public String workInsert(WorkInsertDto workInsertDto) {
		workService.registerWorkEntries(workInsertDto);
		return "redirect:/work/work_list";
	}

	@GetMapping("workupdate")
	public String workupdate() {
		return "work/work_update";
	}

	@GetMapping("workinfo")
	public String workinfo() {
		return "work/work_info";
	}

	@GetMapping("worklist")
	public String worklist() {
		return "work/work_list";
	}

}
