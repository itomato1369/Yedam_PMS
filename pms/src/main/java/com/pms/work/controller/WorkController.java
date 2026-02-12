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
		model.addAttribute("workEntriesList", workService.findAllWorkEntries(workSelectDto));
		return "work/work-list";
	}

	// 소요시간 등록 화면 + 작업분류의 이름 가져오기 + 내가 속한 프로젝트의 일감 번호
	// 로그인시 저장된 userId
	@GetMapping("/insert")
	public String workAddPage(Model model, HttpSession session) {
		String userId = (String) session.getAttribute("userId");
	   // session에 저장된 userId라는 데이터를 찾아옴 서버는 그냥 Object로 해서 주기에 강제 타입변환
		System.out.println("현재 로그인 유저 ID: " + userId);
		model.addAttribute("statusList", workService.findWorkDetails());
		model.addAttribute("issueList", workService.findMyIssue(userId));
		System.out.println("statusList");
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

		workSelectDto.setUserId(userId);
		// 검색 조건용 작업분류 리스트
		model.addAttribute("statusList", workService.findWorkDetails());
		// type은 job, project, users, week, month
		String type = workSelectDto.getType();
		// 보고서 페이지에서 조회를 눌렀을 때 type이 존재하면
		if (type != null && !type.isEmpty()) {
			// type이 "field-job,field-project" 여러개 넘어오면 인덱스 0번째 를 기준으로 처리
			if (type.contains(",")) {
				type = type.split(",")[0];
			}
			List<WorkReportDto> reportList = workService.findWorkReport(type, workSelectDto);
			model.addAttribute("reportList", reportList);
			model.addAttribute("reportType", workSelectDto.getType());
		}

		return "work/work-report";

	}

}
