package com.pms.setting.users.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.users.dto.UsersResponseDto;
import com.pms.setting.users.entity.UsersEntity;

public interface UsersRepository extends JpaRepository<UsersEntity, String> {

    @Modifying
    @Transactional
    @Query("""
        UPDATE UsersEntity u
        SET u.status = :status
        WHERE u.userId = :userId
    """)
    int updateUserStatus(String userId, Integer status);
    
    @Query("""
    	    SELECT new com.pms.setting.users.dto.UsersResponseDto(
    	        u.userId,
    	        u.username,
    	        u.admin,
    	        u.status,
    	        u.lastLogin,
    	        u.createTime,
    	        u.email
    	    )
    	    FROM UsersEntity u
    	""")
    	List<UsersResponseDto> findAllUsers();
    
    @Query("""
    	    SELECT new com.pms.setting.users.dto.UsersResponseDto(
    	        u.userId,
    	        u.username,
    	        u.admin,
    	        u.status,
    	        u.lastLogin,
    	        u.createTime,
    	        u.email
    	    )
    	    FROM UsersEntity u
    	    WHERE (:status IS NULL OR u.status = :status)
    	      AND (:keyword IS NULL OR u.username LIKE %:keyword%)
    	""")
    	List<UsersResponseDto> searchUsers(Integer status, String keyword);
}
