package com.pms.work.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pms.work.dto.WorkDetailsDto;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkReportDto;
import com.pms.work.dto.WorkSelectDto;
import com.pms.work.dto.WorkUpdateDto;
import com.pms.work.service.WorkService;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/work")
public class WorkController {
	private final WorkService workService;
	
	// 소요시간 전체 조회 + 검색기능
	@GetMapping("/list")
	public String workList(Model model, WorkSelectDto workSelectDto) {
		List<WorkDetailsDto> statusList = workService.findWorkDetails();
		model.addAttribute("statusList", statusList);
		// 검색한 결과를 담아 보냄
		model.addAttribute("workEntriesList" ,workService.findAllWorkEntries(workSelectDto));
		return "work/work-list";
	}

	// 소요시간 등록 화면 + 작업분류의 이름 가져오기
	@GetMapping("/insert")
	public String workAddPage(Model model) {
		model.addAttribute("statusList", workService.findWorkDetails());
		return "work/work-add";
	}

	// 쇼요시간 등록 기능
	@PostMapping("/insert")
	public String workAdd(WorkInsertDto workInsertDto) {
		workService.addWorkEntries(workInsertDto);
		return "redirect:/work/list";
	}
	
	// 소요시간 수정화면 이미 등록된 정보를 서버가 제공 + 작업분류 가져오기
	@GetMapping("/update")
	public String workModifyPage(@RequestParam("workNo") Integer workEntriesNo, Model model) {
		// 서버에서 미리 제공하는 정보들
		WorkUpdateDto searchDto = new WorkUpdateDto();
		searchDto.setWorkEntriesNo(workEntriesNo);
		
		model.addAttribute("statusList", workService.findWorkDetails());
		model.addAttribute("workDetails", workService.findWorkEntriesByNo(searchDto));
		return "work/work-modify";
	}
	// 소요시간 수정 기능
	@PostMapping("/update")
	public String workModify() {
		return "redirect:/work/list";		
	}
	// 소요시간 보고서 
	@GetMapping("/report")
	public String workReport(WorkSelectDto workSelectDto, Model model, HttpSession session) {
		String userId = (String) session.getAttribute("userId");
		// 추후에 수정해야함 
		if (userId == null)
			userId = "song";
		workSelectDto.setUserId(userId);
		// 검색 조건용 작업분류 리스트
		model.addAttribute("statusList", workService.findWorkDetails());
		// 통합 Method
	    // 조회를 눌러야 type이 넘어온다 type이 지정되었거나 비어있지 않으면 즉 type이 있으면
		if (workSelectDto.getType() != null && !workSelectDto.getType().isEmpty()) {
			List<WorkReportDto> reportList = workService.findWorkReport(workSelectDto.getType(), workSelectDto);
			// reportList에 담아서 보냄
			model.addAttribute("reportList", reportList);
			model.addAttribute("reportType", workSelectDto.getType());		
		}
		
		System.out.println("--- 조회 조건 확인 ---");
		System.out.println("타입(Type): " + workSelectDto.getType());
		System.out.println("사용자(UserId): " + workSelectDto.getUserId());
		System.out.println("일감번호(JobNo): " + workSelectDto.getJobNo());
		System.out.println("프로젝트번호(ProjectNo): " + workSelectDto.getProjectNo());
		return "work/work-report";
		
	}


}
