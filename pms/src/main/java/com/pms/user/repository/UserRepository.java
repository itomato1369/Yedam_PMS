package com.pms.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.user.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, String> {

}
