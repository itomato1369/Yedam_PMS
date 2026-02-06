package com.pms.setting.users.dto;

import lombok.Getter;
import java.time.LocalDateTime;

@Getter
public class UsersResponseDto {
	//관리자가 확인하는 유저정보
    private String userId;
    private String username;
    private Integer admin;
    private Integer status;
    private LocalDateTime lastLogin;
    private LocalDateTime createTime;
    private String email;

    public UsersResponseDto(String userId,
                            String username,
                            Integer admin,
                            Integer status,
                            LocalDateTime lastLogin,
                            LocalDateTime createTime,
                            String email) {
        this.userId = userId;
        this.username = username;
        this.admin = admin;
        this.status = status;
        this.lastLogin = lastLogin;
        this.createTime = createTime;
        this.email = email;
    }
}
