package com.pms.userscreate.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.userscreate.entity.Users;

public interface UsersRepository  extends JpaRepository<Users, String> {

}
