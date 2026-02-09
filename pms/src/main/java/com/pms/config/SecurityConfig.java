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
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		http.csrf(csrf -> csrf.disable())
			.authorizeHttpRequests(auth -> auth
					.requestMatchers("/home", "/user").permitAll()
					.requestMatchers("/settings").hasRole("ADMIN")
					.anyRequest().authenticated()
					)
			.formLogin(form -> form
					.loginPage("/user/login").permitAll()
					)
			.logout(logout -> logout
					.logoutSuccessUrl("/user/logout")
					.logoutSuccessUrl("/user/login")
					.invalidateHttpSession(true)
					);
		
		return http.build();
	}
}
