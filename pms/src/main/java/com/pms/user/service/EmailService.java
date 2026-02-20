package com.pms.user.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EmailService {
	private final JavaMailSender mailSender;
	
	@Async
	public void sendMail(String userMail, String tokenValue) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo(userMail);
		message.setSubject("[PMS Project] PW RESET");
		message.setText("PW RESET LINK\n" + "http://localhost:8080/user/pwResetLink?token=" + tokenValue);
		mailSender.send(message);
	}

}
