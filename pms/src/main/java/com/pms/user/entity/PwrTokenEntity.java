package com.pms.user.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "pw_reset_token")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PwrTokenEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pw_reset_seq")
	@SequenceGenerator(name = "pw_reset_seq", sequenceName = "PW_RESET_TOKEN_SEQ")
	private Integer tokenId;

	@Column(nullable = false)
	private String userId;

	@Column(nullable = false, unique = true)
	private String tokenValue;

	@Column(nullable = false)
	private LocalDateTime createdTime;

	@Column(nullable = false)
	private LocalDateTime endTime;

	@Builder
	public PwrTokenEntity(String userId, String tokenValue, int endTime) {
		this.userId = userId;
		this.tokenValue = tokenValue;
		this.createdTime = LocalDateTime.now();
		this.endTime = this.createdTime.plusMinutes(endTime);
	}

	// 토큰 만료 확인
	public boolean tokenTime() {
		return LocalDateTime.now().isAfter(this.endTime);
	}
}
