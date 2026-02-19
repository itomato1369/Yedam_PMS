package com.pms.setting.users.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
	@AllArgsConstructor
	public class UserStatusCountDto {

	    private Long commonNo;
	    private String commonName;
	    private Long userCount;
	}
