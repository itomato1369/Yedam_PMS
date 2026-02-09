package com.pms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.pms.user.service.UserService;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

	private final UserService userService;

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
			.authorizeHttpRequests(auth -> auth
					.requestMatchers("/home", "/user").permitAll()
					.requestMatchers("/settings").hasRole("ADMIN")
					.anyRequest().authenticated()
					)
			.formLogin(form -> form
					.loginPage("/user/login")
					.loginProcessingUrl("/user/login")
					.usernameParameter("userId")
					.passwordParameter("password")
					.successHandler((req, res, authentication) -> {
						// 로그인 성공 핸들러
						String userId = authentication.getName();
						userService.modifyDateUpdate(userId);
						res.sendRedirect("/");
					})
					.permitAll()
					)
			.logout(logout -> logout
					.logoutSuccessUrl("/user/logout")
					.logoutSuccessUrl("/user/login")
					.invalidateHttpSession(true)
					);
		
		return http.build();
	}
}
