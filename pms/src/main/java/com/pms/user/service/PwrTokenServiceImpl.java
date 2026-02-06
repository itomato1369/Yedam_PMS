package com.pms.user.service;

import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	@Transactional
	public void sendResetMail(String userId) {
		// 존재하는 유저인지 확인
		userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디"));

		// 기존에 발행된 토큰이 있는지 확인
		// 있으면 삭제
		pwrTokenRepository.findByUserId(userId).ifPresent(pwrTokenRepository::delete);

		// 랜덤 토큰 저장
		String tokenValue = UUID.randomUUID().toString();
		PwrTokenEntity newToken = PwrTokenEntity.builder().userId(userId).tokenValue(tokenValue).endTime(5).build();

		pwrTokenRepository.save(newToken);
	}

	// 토큰 유효성 확인
	@Override
	public boolean checkToken(String tokenValue) {
		return pwrTokenRepository.findByTokenValue(tokenValue).map(token -> !token.tokenTime()).orElse(false);
	}

	// 토큰 확인 후 PW 변경
	@Override
	@Transactional
	public void updatePwService(String token, String encryptedPw) {

		PwrTokenEntity pwrToken = pwrTokenRepository.findByTokenValue(token).filter(t -> !t.tokenTime())
				.orElseThrow(() -> new IllegalArgumentException("토큰이 존재하지 않습니다."));

		UserEntity user = userRepository.findById(pwrToken.getUserId())
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다."));

		// TODO : 시큐리티 구현 후 암호화 할 것
		user.updatePwEntity(encryptedPw);
		
		// PW 변경 후 DB에서 토큰 삭제
		pwrTokenRepository.delete(pwrToken);
	}

}
