package com.pms.config;

import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final ProjectAuthorizationManager projectAuthorizationManager;
    
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	LoginSuccessHandler loginSucessHandler() {
		return new LoginSuccessHandler();
	}

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
			.authorizeHttpRequests(auth -> auth
					.requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
					.requestMatchers("/coreui/**").permitAll()
					.requestMatchers("/home/**", "/user/**").permitAll()
					.requestMatchers("/settings/**").hasRole("ADMIN")
					.requestMatchers("/project/{projectCode}/**").access(projectAuthorizationManager)
					.anyRequest().authenticated()
					)
			.formLogin(form -> form
					.loginPage("/user/login")
					.loginProcessingUrl("/user/login")
					.usernameParameter("userId")
					.successHandler(loginSucessHandler())
					.permitAll()
					)
			.logout(logout -> logout
					.logoutUrl("/user/logout")
					.logoutSuccessUrl("/user/login")
					.invalidateHttpSession(true)
					);
		
		return http.build();
	}
}
