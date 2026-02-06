package com.pms.userscreate.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.pms.userscreate.entity.Users;

@Mapper
public interface UsersCreateMapper {
	int insertUser(Users vo);
}
