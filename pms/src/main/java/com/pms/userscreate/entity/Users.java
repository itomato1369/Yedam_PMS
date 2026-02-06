package com.pms.userscreate.entity;

import com.pms.userscreate.dto.UsersCreateDto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Users {
    // 1. UI 입력 필드 (화면에서 직접 입력 및 체크하는 값들)
	@Id
    private String userId;          // 로그인 (ID)
    
	@Column(name = "USERNAME", length = 100)
	private String userName;        // 이름 (성+이름 합본)
	@Column(name = "PASSWD")
    private String passwd;          // 비밀번호
    private Integer admin;          // 관리자 권한 부여 체크박스 (true/false)

    // 2. DB 저장 시 필요한 추가 필드 (테이블 구조 대응)
    @Column(length = 50)
    private String email;           // 이메일 (화면에서 삭제했다면 서비스에서 기본값 처리)
    private Integer status;         // 상태 (기본값 1: 활성)
   
    // Entity → DTO 변환
    public static UsersCreateDto fromEntity(Users member) {
        return new UsersCreateDto(member.userId, member.userName, member.passwd, member.admin, member.email, member.status);
    }

}
