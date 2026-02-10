package com.pms.work.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkSelectDto;
import com.pms.work.dto.WorkUpdateDto;
import com.pms.work.service.WorkService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class WorkController {
	private final WorkService workService;
	
	// 소요시간 전체 조회 + 검색기능
	@GetMapping("/work/list")
	public String workList(Model model, WorkSelectDto workSelectDto) {
		List<WorkDetailsDto> statusList = workService.findWorkDetails();
		model.addAttribute("statusList", statusList);
		// 검색한 결과를 담아 보냄
		model.addAttribute("workEntriesList" ,workService.findAllWorkEntries(workSelectDto));
		return "work/work-list";
	}

	// 소요시간 등록 화면 + 작업분류의 이름 가져오기
	@GetMapping("/work/insert")
	public String workAddPage(Model model) {
		model.addAttribute("statusList", workService.findWorkDetails());
		return "work/work-add";
	}

	// 쇼요시간 등록 기능
	@PostMapping("/work/insert")
	public String workAdd(WorkInsertDto workInsertDto) {
		workService.addWorkEntries(workInsertDto);
		return "redirect:/work/list";
	}
	
	// 소요시간 수정화면 이미 등록된 정보를 서버가 제공 + 작업분류 가져오기
	@GetMapping("/work/update")
	public String workModifyPage(@RequestParam("workNo") Integer workEntriesNo, Model model) {
		// 서버에서 미리 제공하는 정보들
		WorkUpdateDto searchDto = new WorkUpdateDto();
		searchDto.setWorkEntriesNo(workEntriesNo);
		
		model.addAttribute("statusList", workService.findWorkDetails());
		model.addAttribute("workDetails", workService.findWorkEntriesByNo(searchDto));
		return "work/work-modify";
	}
	// 소요시간 수정 기능
	@PostMapping("/work/update")
	public String workModify() {
		return "redirect:/work/list";		
	}


}
