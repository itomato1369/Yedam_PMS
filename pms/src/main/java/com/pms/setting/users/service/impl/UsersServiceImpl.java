package com.pms.setting.users.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.groups.vo.GroupsVO;
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
        // 검색어가 공백만 있거나 빈 문자열인 경우 null로 처리하여 DB 쿼리가 전체 조회를 하도록 유도
        if (keyword != null && keyword.trim().isEmpty()) {
            keyword = null;
        } else if (keyword != null) {
            keyword = keyword.trim(); // 앞뒤 공백 제거
        }
        return usersRepository.searchUsers(status, keyword);
    }
}