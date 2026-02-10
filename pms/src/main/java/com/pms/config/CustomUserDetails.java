package com.pms.config;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import com.pms.user.entity.UserEntity;

import lombok.Getter;

@Getter
public class CustomUserDetails extends User {

	private static final long serialVersionUID = 1L;
	private final UserEntity userEntity;

	public CustomUserDetails(UserEntity user) {
		super(user.getUserId(),
			user.getPasswd(),
			AuthorityUtils.createAuthorityList(
					user.getAdmin().equals(1) ? "ROLE_ADMIN" : "ROLE_USER")
			);
		this.userEntity = user;
	}
}
