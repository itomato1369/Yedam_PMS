package com.pms.user.service.password;

public interface PasswordPolicy {
	String encode(String raw);

	boolean matches(String raw, String encoded);
}
