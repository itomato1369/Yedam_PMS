package com.pms.userscreate.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.pms.userscreate.dto.UsersCreateDto;
import com.pms.userscreate.entity.Users;
import com.pms.userscreate.repository.UsersRepository;

@Service
public class UsersCreateService {

//	@Autowired
//	private BCryptPasswordEncoder passwordEncoder;
	@Autowired
	private UsersRepository usersRepository;

	public void registerUser(UsersCreateDto dto) {
		// 1. 비밀번호 일치 확인
		if (!dto.getPasswd().equals(dto.getPasswordConfirm())) {
			throw new RuntimeException("비밀번호가 일치하지 않습니다.");
		}

		// 2. DTO -> VO 변환 (아까 만든 변환 메소드 활용)
		// admin, status 등의 기본값 처리가 포함됩니다.
		usersRepository.save(dto.toEntity());
	/*	String encodedPw = passwordEncoder.encode(dto.getPasswd());

		Users entity = dto.toEntity();
		entity.setPasswd(encodedPw); // 암호화된 비밀번호로 교체
		usersRepository.save(entity);*/

	}

	public List<UsersCreateDto> findAll() {
		List<Users> users = usersRepository.findAll();
		// Entity 리스트를 DTO 리스트로 변환
		List<UsersCreateDto> userDTOList = users.stream().map(Users::fromEntity).collect(Collectors.toList());
		return userDTOList;
	}

	public boolean existsByUserId(String userId) {
		// JpaRepository를 사용한다면 간단히 체크 가능합니다.
		return usersRepository.existsById(userId);
	}

}
