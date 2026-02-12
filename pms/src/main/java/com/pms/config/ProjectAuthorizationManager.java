package com.pms.config;

import java.util.Map;
import java.util.function.Supplier;

import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.stereotype.Component;

import com.pms.project.service.ProjectSecurityService;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class ProjectAuthorizationManager implements AuthorizationManager<RequestAuthorizationContext> {

	private final ProjectSecurityService projectSecurityService;

	@Override
	public AuthorizationDecision check(Supplier<Authentication> authentication, RequestAuthorizationContext context) {

		Map<String, String> variables = context.getVariables();
		String projectCode = variables.get("projectCode");

		// projectCode 확인
		// projectCode 없는 경로면 접근 허용
		if (projectCode == null) {
			return new AuthorizationDecision(true);
		}

		// 인증 객체 확인
		Authentication auth = authentication.get();
		if (!isUserAuth(auth)) {
			return new AuthorizationDecision(false);
		}

		// 관리자 확인
		CustomUserDetails customUser = (CustomUserDetails) auth.getPrincipal();
		if (customUser.getUserEntity().isAdmin()) {
			return new AuthorizationDecision(true);
		}

		// HTTP method Service 전달
		String method = context.getRequest().getMethod();
		String action = switch (method.toUpperCase()) {
							case "GET" -> "READ";
							case "POST" -> "CREATE";
							case "PUT", "PATCH" -> "UPDATE";
							case "DELETE" -> "DELETE";
						default -> "READ";
		};
		
		String userId = customUser.getUsername();
		boolean isAuth = projectSecurityService.isAuth(userId, projectCode, action);

		return new AuthorizationDecision(isAuth);
	}

	private boolean isUserAuth(Authentication auth) {
		return auth == null || !auth.isAuthenticated() || !(auth.getPrincipal() instanceof CustomUserDetails);
	}

}
