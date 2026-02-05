package com.pms.user.web;

import java.time.LocalDateTime;

import com.pms.user.entity.UserEntity;
import com.pms.user.service.password.PasswordPolicy;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UserDto {

	@NotBlank(message = "ID는 필수값입니다.")
	private String userId;

	@NotBlank(message = "PW는 필수값입니다.")
	private String password;

	@NotBlank(message = "이름은 필수값입니다.")
	private String username;

	@NotBlank(message = "관리자 여부는 필수값입니다.")
	private Integer admin;
	private Integer status;

	@NotBlank(message = "이메일은 필수입니다.")
	@Email(message = "이메일 형식이 올바르지 않습니다.")
	private String email;
	
	public UserEntity toEntity(String encodedPw) {
		return UserEntity.builder()
				.userId(this.userId.trim())
				.passwd(encodedPw)
				.username(this.username.trim())
				.admin(this.admin)
				.status(this.status)
				.createtime(LocalDateTime.now())
				.email(this.email)
				.build();
	}
}
