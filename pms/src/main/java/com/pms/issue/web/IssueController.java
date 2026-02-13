package com.pms.issue.web;

import java.util.List;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pms.config.CustomUserDetails;
import com.pms.issue.service.IssueService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/issue")
public class IssueController {

	private final IssueService issueService;

	// 일감 리스트
	@GetMapping("/list")
	public String findIssueList(@AuthenticationPrincipal CustomUserDetails customUser, Model model) {
		String userId = customUser.getUsername();
		List<IssueDto> issueList = issueService.findIssueList(userId);
		model.addAttribute("issueList", issueList);
		return "issue/issue-list";
	}

	// 일감 등록 form
	@GetMapping("/new")
	public String newIssueForm(Model model) {
		return "issue/issue-insert";
	}

	// 일감 등록
	@PostMapping("/insert")
	public String addIssue(@AuthenticationPrincipal CustomUserDetails customUser, IssueDto issueDto) {
		issueDto.setUserId(customUser.getUsername());
		Integer jobNo = issueService.addIssue(issueDto);

		return "redirect:/issue/info?jobNo=" + jobNo;
	}
}
