package com.pms.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

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
					.requestMatchers("/home/**", "/user/**", "/coreui/**").permitAll()
					.requestMatchers("/settings/**").hasRole("ADMIN")
					.anyRequest().authenticated()
					)
			.formLogin(form -> form
					.loginPage("/user/login")
					.loginProcessingUrl("/user/login")
					.successHandler(loginSucessHandler())
					.permitAll()
					)
			.logout(logout -> logout
					.logoutSuccessUrl("/user/logout")
					.invalidateHttpSession(true)
					);
		
		return http.build();
	}
}
