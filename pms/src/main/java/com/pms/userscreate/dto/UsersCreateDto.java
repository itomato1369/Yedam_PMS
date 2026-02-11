package com.pms.userscreate.dto;

import com.pms.userscreate.entity.Users;

import lombok.AllArgsConstructor;
import lombok.Data;



@Data
public class UsersCreateDto {
    // 1. UI 입력 필드 (화면에서 직접 입력 및 체크하는 값들)
    private String userId;          // 로그인 (ID)
    private String userName;        // 이름 (성+이름 합본)
    private String passwd;          // 비밀번호
    private String passwordConfirm;   // 비밀번호 확인
    private Integer admin;          // 관리자 권한 부여 체크박스 (true/false)

    // 2. DB 저장 시 필요한 추가 필드 (테이블 구조 대응)
    private String email;           // 이메일 (화면에서 삭제했다면 서비스에서 기본값 처리)
    private Integer status;         // 상태 (기본값 1: 활성)
    
    
    
 // Entity(VO) 변환 메서드
    public Users toEntity() {
        Users vo = new Users();
        vo.setUserId(this.userId);
        vo.setPasswd(this.passwd);
        vo.setUserName(this.userName);
        
        // 관리자 여부: 화면에서 안 넘어오면 기본값 0(일반)
        vo.setAdmin(this.admin != null ? this.admin : 0);
        
        // 상태: 생성 시 기본값 1(활성)
        vo.setStatus(this.status != null ? this.status : 1);
        
        // 이메일: 화면에서 삭제했다면 더미데이터나 null 처리
        vo.setEmail(this.email);
        
        return vo;
    }


public UsersCreateDto() {}
 public UsersCreateDto(String userId, String userName, String passwd, Integer admin, String email, Integer status) {
	super();
	this.userId = userId;
	this.userName = userName;
	this.passwd = passwd;
	this.admin = admin;
	this.email = email;
	this.status = status;
 }
    
    
}