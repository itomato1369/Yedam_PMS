package com.pms.user.service;

public interface PwrTokenService {

	// 메일 전송
	public void sendResetMail(String userId);

	// 링크 클릭 확인
	public boolean checkedToken(String token);

	// 비밀번호 변경
	public void changePw(String token, String newPassword);
}
