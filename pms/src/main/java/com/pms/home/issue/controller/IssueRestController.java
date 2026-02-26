package com.pms.home.issue.controller;

import java.util.List;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import com.pms.config.CustomUserDetails;
import com.pms.issue.service.IssueService;
import com.pms.issue.web.IssueSelectDto;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/dashboard")
public class IssueRestController {

	private final IssueService issueService;

	@GetMapping("/{projectCode}/issues")
	public List<IssueSelectDto> getDashboardIssues(@AuthenticationPrincipal CustomUserDetails customUser,
			@PathVariable String projectCode,
			@RequestParam(value = "showOnlyMe", defaultValue = "N") String showOnlyMe) {

		IssueSelectDto selectDto = new IssueSelectDto();

		// 1. 로그인한 사용자의 정보 및 권한 확인
		String userId = customUser.getUserEntity().getUserId();
		boolean isAdmin = customUser.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

		// 2. [프로젝트 필터링]
		if ("all".equals(projectCode)) {
			// '전체보기' 선택 시
			if (isAdmin) {
				// 어드민은 projectCode를 세팅하지 않음으로써 '시스템 전체' 조회
				selectDto.setProjectCode(null);
			} else {
				// 일반 사용자는 '전체보기'를 눌러도 '자신이 참여 중인 프로젝트들'만 나와야 함
				// 만약 쿼리에서 이 처리가 어렵다면, DTO에 현재 사용자의 ID를 보내
				// 쿼리 내에서 JOIN을 통해 참여중인 프로젝트만 가져오게 설계해야 합니다.
				selectDto.setUserId(userId);
				selectDto.setProjectCode(null);
			}
		} else {
			// 특정 프로젝트 선택 시
			selectDto.setProjectCode(projectCode);
		}

		// 3. [담당자(내 일감) 필터링]
		if ("Y".equals(showOnlyMe)) {
			// '내 것만' 체크 시 (어드민이든 유저든 본인 것만)
			selectDto.setUserId(userId);
		} else {
			// '내 것만' 체크 해제 시
			if (isAdmin && "all".equals(projectCode)) {
				// 어드민이 '전체 프로젝트' + '내 것만 해제' 상태라면 모든 사람의 일감 조회
				selectDto.setUserId(null);
			} else if (!isAdmin) {
				// 일반 사용자가 '내 것만'을 해제했다면?
				// 보통 프로젝트 내의 '팀원 전체' 일감을 보여주는 것이 일반적입니다.
				selectDto.setUserId(null);
			}
		}

		return issueService.findIssueList(selectDto);
	}

}