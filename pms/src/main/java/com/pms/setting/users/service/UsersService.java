package com.pms.setting.users.service;

import java.util.List;

import com.pms.setting.users.dto.UserStatusUpdateDto;
import com.pms.setting.users.dto.UsersResponseDto;

public interface UsersService {

	    void updateUserStatus(UserStatusUpdateDto dto);
	    
	    List<UsersResponseDto> searchUsers(Integer status, String keyword);
	    
	    List<UsersResponseDto> getUsersExcludeStatus(Integer status);
}