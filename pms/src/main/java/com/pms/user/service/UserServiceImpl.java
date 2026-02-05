package com.pms.user.service;

import java.util.Set;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.user.entity.UserEntity;
import com.pms.user.repository.UserRepository;
import com.pms.user.service.password.PasswordPolicy;
import com.pms.user.web.UserDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	
	private final UserRepository userRepository;
	private final PasswordPolicy passwordPolicy;

	@Override
	@Transactional
	public void register(UserDto userDto) {
		String userId = userDto.getUserId().trim();
		String encodedPw = passwordPolicy.encode(userDto.getPassword());

		if (userRepository.existsById(userId)) {
			throw new IllegalArgumentException("이미 존재하는 ID입니다.");
		}

		UserEntity userData = userDto.toEntity(encodedPw);
		userRepository.save(userData);
	}

}
