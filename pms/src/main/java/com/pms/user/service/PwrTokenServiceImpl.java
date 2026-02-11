package com.pms.user.service;

import java.util.UUID;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.user.entity.PwrTokenEntity;
import com.pms.user.entity.UserEntity;
import com.pms.user.repository.PwrTokenRepository;
import com.pms.user.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PwrTokenServiceImpl implements PwrTokenService {

	private final UserRepository userRepository;
	private final PwrTokenRepository pwrTokenRepository;
	private final PasswordEncoder passwordEncoder;
	private final JavaMailSender mailSender;

	// TODO 반환타입 void로 변경할 것
	// String 테스트 용
	@Override
	@Transactional
	public String sendResetMail(String userId) {
		// 존재하는 유저인지 확인
		UserEntity user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 아이디"));

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
		// 메일 발송
		sendMail(user.getEmail(), tokenValue);
		pwrTokenRepository.save(newToken);

		return tokenValue;
	}
	
	private void sendMail(String userMail, String tokenValue) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(userMail);
		message.setSubject("[PMS Project] PW RESET");
		message.setText("PW RESET LINK\n" + "http://localhost:8080/user/pwResetLink?token=" + tokenValue);
		mailSender.send(message);
	}

	// 토큰 유효성 확인
	@Override
	public boolean checkToken(String tokenValue) {
		return pwrTokenRepository.findByTokenValue(tokenValue).map(token -> !token.tokenTime()).orElse(false);
	}

	// 토큰 확인 후 PW 변경
	@Override
	@Transactional
	public void modifyPwService(String token, String newPw) {

		PwrTokenEntity pwrToken = pwrTokenRepository.findByTokenValue(token).filter(t -> !t.tokenTime())
				.orElseThrow(() -> new IllegalArgumentException("토큰이 존재하지 않습니다."));

		UserEntity user = userRepository.findById(pwrToken.getUserId())
				.orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사용자입니다."));

		String encodedPw = passwordEncoder.encode(newPw);
		user.updatePwEntity(encodedPw);

		// PW 변경 후 DB에서 토큰 삭제
		pwrTokenRepository.delete(pwrToken);
	}

}
