package com.pms.setting.users.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserStatusUpdateDto {
    private String userId;
    private Integer status; // 110, 120, 130
}
