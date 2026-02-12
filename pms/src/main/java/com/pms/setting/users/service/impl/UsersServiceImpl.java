package com.pms.setting.users.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.users.dto.UserStatusUpdateDto;
import com.pms.setting.users.dto.UsersResponseDto;
import com.pms.setting.users.entity.UsersEntity;
import com.pms.setting.users.repository.UsersRepository;
import com.pms.setting.users.service.UsersService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UsersServiceImpl implements UsersService {

    private final UsersRepository usersRepository;

    @Override
    public List<UsersResponseDto> getUsersExcludeStatus(Integer status) {
        return usersRepository.findByStatusNot(status)
                .stream()
                .map(UsersResponseDto::fromEntity) // 또는 생성자 매핑
                .collect(Collectors.toList());
    }
    
    @Override
    @Transactional
    public void updateUserStatus(UserStatusUpdateDto dto) {
    	//단건조회
    	UsersEntity  user = usersRepository.findById(dto.getUserId()).orElseThrow();
    	user.updateStatus(dto.getStatus());
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