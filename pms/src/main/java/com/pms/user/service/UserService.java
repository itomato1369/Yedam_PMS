package com.pms.user.service;

import com.pms.user.entity.UserEntity;
import com.pms.user.web.UserDto;

public interface UserService {
	public void register(UserDto userDto);

	public UserEntity login(String userId, String password);
}
