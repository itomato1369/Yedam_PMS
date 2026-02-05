package com.pms.user.service.password;

import org.springframework.stereotype.Component;

@Component
public class TextPasswordPolicy implements PasswordPolicy {

	@Override
	public String encode(String raw) {
		return raw;
	}

	@Override
	public boolean matches(String raw, String encoded) {
		if (raw == null || encoded == null) {
			return false;
		}
		return raw.equals(encoded);
	}

}
