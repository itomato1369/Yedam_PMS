package com.pms.work.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkSelectDto;
import com.pms.work.service.WorkService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class WorkController {
	private final WorkService workService;
	
	// 소요시간 전체 조회
	@GetMapping("/worklist")
	public String workList(Model model) {
		model.addAttribute("workEntriesList" ,workService.findAllWorkEntries());
		return "work/work_list";
	}
	


	// 소요시간 등록 화면 + 작업분류의 이름 가져오기
	@GetMapping("/workinsert")
	public String workInsertPage(Model model) {
		model.addAttribute("statusList", workService.findWorkDetails());
		return "work/work_insert";
	}

	// 쇼요시간 등록 기능
	@PostMapping("/workinsert")
	public String workInsert(WorkInsertDto workInsertDto) {
		workService.registerWorkEntries(workInsertDto);
		return "redirect:/worklist";
	}
	
	
	

	@GetMapping("workupdate")
	public String workupdate() {
		return "work/work_update";
	}

	@GetMapping("workinfo")
	public String workinfo() {
		return "work/work_info";
	}


}
