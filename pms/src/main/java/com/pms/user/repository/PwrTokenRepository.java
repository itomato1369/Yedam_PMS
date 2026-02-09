package com.pms.user.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.user.entity.PwrTokenEntity;

public interface PwrTokenRepository extends JpaRepository<PwrTokenEntity, Integer> {

	public Optional<PwrTokenEntity> findByTokenValue(String tokenValue);

	public Optional<PwrTokenEntity> findByUserId(String userId);
}
