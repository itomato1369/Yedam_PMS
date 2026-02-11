package com.pms.setting.users.dto;

import java.time.LocalDateTime;

import com.pms.setting.users.entity.UsersEntity;

import lombok.Getter;

@Getter
public class UsersResponseDto {
	// 관리자가 확인하는 유저정보	
	private String userId;
	private String userName;
	private Integer admin;
	private Integer status;
	private LocalDateTime lastLogin;
	private LocalDateTime createTime;
	private String email;

	public UsersResponseDto(String userId, String userName, Integer admin, Integer status, LocalDateTime lastLogin,
			LocalDateTime createTime, String email) {
		this.userId = userId;
		this.userName = userName;
		this.admin = admin;
		this.status = status;
		this.lastLogin = lastLogin;
		this.createTime = createTime;
		this.email = email;
	}

	// static을 추가하세요!
	public static UsersResponseDto fromEntity(UsersEntity entity) {
	    return new UsersResponseDto(
	        entity.getUserId(), entity.getUsername(), entity.getAdmin(), 
	        entity.getStatus(), entity.getLastLogin(), entity.getCreateTime(), entity.getEmail()
	    );
	}
}
