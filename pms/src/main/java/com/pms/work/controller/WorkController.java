package com.pms.work.controller;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.pms.config.CustomUserDetails;
import com.pms.user.entity.UserEntity;
import com.pms.work.dto.WorkInsertDto;
import com.pms.work.dto.WorkReportDto;
import com.pms.work.dto.WorkSelectDto;
import com.pms.work.dto.WorkUpdateDto;
import com.pms.work.service.WorkService;

import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
<<<<<<< Updated upstream
@RequestMapping("/project/{projectCode}/{issueNo}/work")
=======
@RequestMapping("/project/{projectCode}/work")
>>>>>>> Stashed changes
public class WorkController {
	private final WorkService workService;

	// 소요시간 전체 조회 + 검색기능
	@GetMapping("/list")
	public String workList(@AuthenticationPrincipal CustomUserDetails customUser, @PathVariable String projectCode,
			Model model, WorkSelectDto workSelectDto) {
		
		UserEntity user = customUser.getUserEntity();
		
		workSelectDto.setUserId(user.getUserId());
		workSelectDto.setProjectCode(projectCode);

		System.out.println("아이디: " + user.getUserId());
		System.out.println("역할: " + user.getUsername());

		// 검색한 결과를 담아 보냄
		model.addAttribute("projectCode", projectCode);
		model.addAttribute("userId", user.getUserId());
		model.addAttribute("workEntriesList", workService.findAllWorkEntries(workSelectDto));
		return "work/work-list";
	}
	/*
	 * 예시)
	 * 
	 * @GetMapping("주소") public String example(@AuthenticationPrincipal
	 * CustomUserDetails customUser) { // 유저 엔티티 가져옴 UserEntity user =
	 * customUser.getUserEntity(); // 필드값 바로 사용 System.out.println("아이디: " +
	 * user.getUserId()); System.out.println("이메일: " + user.getEmail());
	 * System.out.println("이름: " + user.getUsername()); return "리턴값"; }
	 */

	// 소요시간 등록 화면 + 작업분류의 이름 가져오기 + 내가 속한 프로젝트의 일감 번호
	// 로그인시 저장된 userId
	@GetMapping("/insert")
	public String workAddPage(@AuthenticationPrincipal CustomUserDetails customUser, @PathVariable String projectCode, Model model,
			WorkInsertDto workInsertDto) {
	
		UserEntity user = customUser.getUserEntity();

		workInsertDto.setProjectCode(projectCode);
		workInsertDto.setUserId(user.getUserId());
		
		// session에 저장된 userId라는 데이터를 찾아옴 서버는 그냥 Object로 해서 주기에 강제 타입변환
		System.out.println("현재 로그인 유저 ID: " + user);
		model.addAttribute("projectCode", projectCode);
		model.addAttribute("userId", user.getUserId());
		model.addAttribute("issueList", workService.findMyIssue(workInsertDto));
		return "work/work-add";
	}

	// 쇼요시간 등록 기능
	@PostMapping("/insert")
	public String workAdd(@PathVariable String projectCode, WorkInsertDto workInsertDto) {
		workService.addWorkEntries(workInsertDto);
		return "redirect:/project" + projectCode + "work/list";
	}

	// 소요시간 수정화면 이미 등록된 정보를 서버가 제공 + 작업분류 가져오기
	@GetMapping("/update")
	public String workModifyPage(@AuthenticationPrincipal CustomUserDetails customUser, @PathVariable String projectCode, @RequestParam("workNo") Integer workEntriesNo,
			Model model) {
		UserEntity user = customUser.getUserEntity();
		// 서버에서 미리 제공하는 정보
		WorkUpdateDto searchDto = new WorkUpdateDto();
		searchDto.setWorkEntriesNo(workEntriesNo);
		
		model.addAttribute("userId", user.getUserId());
		model.addAttribute("projectCode", projectCode);
		model.addAttribute("workDetails", workService.findWorkEntriesByNo(searchDto));
		return "work/work-modify";
	}

	// 소요시간 수정 기능
	@PostMapping("/update")
	public String workModify(@PathVariable String projectCode) {
		return "redirect:/project" + projectCode + "work/list";
	}

	// 소요시간 보고서
	@GetMapping("/report")
	public String workReport(@AuthenticationPrincipal CustomUserDetails customUser, @PathVariable String projectCode,
		WorkReportDto workReportDto, Model model) {
		
		UserEntity user = customUser.getUserEntity();

		workReportDto.setProjectCode(projectCode);
		workReportDto.setUserId(user.getUserId());

		// type은 job, project, users, week, month
		String type = workReportDto.getType();
		// 보고서 페이지에서 조회를 눌렀을 때 type이 존재하면
		if (type != null && !type.isEmpty()) {
			// type이 "field-job,field-project" 여러개 넘어오면 인덱스 0번째 를 기준으로 처리
			if (type.contains(",")) {
				type = type.split(",")[0];
			}
			
			List<WorkReportDto> reportList = workService.findWorkReport(type, workReportDto);
			
		
			
			model.addAttribute("userId", user.getUserId());
			model.addAttribute("projectCode", projectCode);
			
			model.addAttribute("reportList", reportList);
			model.addAttribute("reportType", workReportDto.getType());
		}

		return "work/work-report";

	}

}
