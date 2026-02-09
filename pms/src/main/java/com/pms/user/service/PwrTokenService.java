package com.pms.user.service;

public interface PwrTokenService {

	// 메일 전송
	public String sendResetMail(String userId);

	// 링크 클릭 확인
	public boolean checkToken(String token);

	// 비밀번호 변경
	public void modifyPwService(String token, String newPassword);
}
