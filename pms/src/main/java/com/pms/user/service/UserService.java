package com.pms.user.service;

import com.pms.user.web.UserDto;

public interface UserService {
	public void addUser(UserDto userDto);

	public void modifyDateUpdate(String userId);
}
