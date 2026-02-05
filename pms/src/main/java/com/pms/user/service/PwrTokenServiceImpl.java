package com.pms.user.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.pms.user.entity.PwrTokenEntity;
import com.pms.user.entity.UserEntity;
import com.pms.user.repository.PwrTokenRepository;
import com.pms.user.repository.UserRepository;
import com.pms.user.service.password.PasswordPolicy;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PwrTokenServiceImpl implements PwrTokenService {

	private final UserRepository userRepository;
	private final PwrTokenRepository pwrTokenRepository;
	private final PasswordPolicy passwordPolicy;

	@Override
	public void sendResetMail(String userId) {
		// 존재하는 유저인지 확인
		UserEntity user = userRepository.findById(userId)
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디"));

		// 기존에 발행된 토큰이 있는지 확인
		// 있으면 삭제
		pwrTokenRepository.findByUserId(userId).ifPresent(pwrTokenRepository::delete);
		
		// 랜덤 토큰 저장
		String tokenValue = UUID.randomUUID().toString();
		PwrTokenEntity newToken = PwrTokenEntity.builder()
				.userId(userId)
				.tokenValue(tokenValue)
				.endTime(5)
				.build();
		
		pwrTokenRepository.save(newToken);
	}

	@Override
	public boolean checkedToken(String token) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public void changePw(String token, String newPassword) {
		// TODO Auto-generated method stub

	}

}
