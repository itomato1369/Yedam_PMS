package com.pms.setting.users.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsersDto {
	// 유저가입/수정용 DTO
    private String userId;
    private String passwd;
    private String username;
    private Integer admin;
    private Integer status;
    private LocalDateTime lastLogin;
    private LocalDateTime createTime;
    private String email;
}