package com.pms.setting.users.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.users.dto.UserStatusUpdateDto;
import com.pms.setting.users.dto.UsersResponseDto;
import com.pms.setting.users.repository.UsersRepository;
import com.pms.setting.users.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UsersServiceImpl implements UsersService {

    private final UsersRepository usersRepository;

    @Override
    public List<UsersResponseDto> getUsers() {
        return usersRepository.findAllUsers();
    }

    @Override
    @Transactional
    public void updateUserStatus(UserStatusUpdateDto dto) {
        int updated = usersRepository.updateUserStatus(dto.getUserId(), dto.getStatus());

        if (updated == 0) {
            throw new RuntimeException("해당 유저가 존재하지 않습니다.");
        }
    }
    
    @Override
    public List<UsersResponseDto> searchUsers(Integer status, String keyword) {
        if (keyword != null && keyword.isBlank()) keyword = null;
        return usersRepository.searchUsers(status, keyword);
    }
}