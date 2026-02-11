package com.pms.config;

import java.util.function.Supplier;

import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriTemplate;

import com.pms.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ProjectAuthorizationManager implements AuthorizationManager<RequestAuthorizationContext> {

	private final UserRepository userRepository;
	private final UriTemplate projectUri = new UriTemplate("/project/{projectCode}/**");

	@Override
	public AuthorizationDecision check(Supplier<Authentication> authentication, RequestAuthorizationContext context) {
		System.out.println(">>> ProjectAuthorizationManager 진입함! URL: " + context.getRequest().getRequestURI());
		
		// url이 맞는지 확인
		String uri = context.getRequest().getRequestURI();
		if (!projectUri.matches(uri)) {
			return new AuthorizationDecision(true);
		}

		// 인증 객체 확인
		Authentication auth = authentication.get();
		if (auth == null || !auth.isAuthenticated()) {
			return new AuthorizationDecision(false);
		}

		// 관리자 유무 확인
		CustomUserDetails customUser = (CustomUserDetails) auth.getPrincipal();
		if (customUser.getUserEntity().isAdmin()) {
			return new AuthorizationDecision(true);
		}

		// projectCode 추출
		// -> 프로젝트 멤버인지 확인하는 용도
		String projectCode = projectUri.match(uri).get("projectCode");
		boolean isMember = userRepository.existsByUserId(customUser.getUsername(), projectCode);
		System.out.println();
		System.out.println();
		System.out.println();
		System.out.println("==============================================");
		System.out.println("[Security-Log] 프로젝트 권한 검사 수행");
		System.out.println("[ 접속 유저 ]		: " + customUser.getUsername());
		System.out.println("[ 프로젝트 ]		: " + projectCode);
		System.out.println("[ 권한 여부(DB) ]	: " + isMember);
		System.out.println("[ 결과 ]			: " + (isMember ? "승인" : "거부"));
		System.out.println("==============================================");
		System.out.println();
		System.out.println();
		System.out.println();
		
		return new AuthorizationDecision(isMember);
	}

}
