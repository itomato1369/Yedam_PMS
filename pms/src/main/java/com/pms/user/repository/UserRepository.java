package com.pms.user.repository;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.pms.user.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, String> {

	@Modifying
	@Query("""
			UPDATE UserEntity u
			SET u.lastlogin = :lastLogin
			WHERE u.userId = :userId
			""")
	public int updateLastLogin(@Param("userId") String userId, @Param("lastLogin") LocalDateTime lastLogin);
}
