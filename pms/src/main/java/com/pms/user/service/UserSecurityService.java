package com.pms.user.service;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.pms.config.CustomUserDetails;
import com.pms.user.entity.UserEntity;
import com.pms.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserSecurityService implements UserDetailsService {

	private final UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
		UserEntity user = userRepository.findById(userId)
				.orElseThrow(() -> new UsernameNotFoundException("존재하지 않는 ID입니다." + userId));

		return new CustomUserDetails(user);
	}
}
