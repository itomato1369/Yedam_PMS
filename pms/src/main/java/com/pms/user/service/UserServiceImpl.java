package com.pms.user.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.user.entity.UserEntity;
import com.pms.user.repository.UserRepository;
import com.pms.user.web.UserDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;

	@Override
	@Transactional
	public void register(UserDto userDto) {
		String userId = userDto.getUserId().trim();
		String encodedPw = passwordEncoder.encode(userDto.getPassword());

		if (userRepository.existsById(userId)) {
			throw new IllegalArgumentException("이미 존재하는 ID입니다.");
		}

		UserEntity userData = userDto.toEntity(encodedPw);
		userRepository.save(userData);
	}

	@Override
	@Transactional
	public UserEntity login(String userId, String password) {

		UserEntity user = userRepository.findById(userId)
				.orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호가 올바르지 않습니다."));

		if (!passwordEncoder.matches(password, user.getPasswd())) {
			throw new IllegalArgumentException("아이디 또는 비밀번호가 올바르지 않습니다.");
		}

		userRepository.updateLastLogin(userId, LocalDateTime.now());
		return user;
	}

}
