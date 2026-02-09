package com.pms.setting.users.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.pms.setting.users.dto.UserStatusUpdateDto;
import com.pms.setting.users.dto.UsersResponseDto;
import com.pms.setting.users.service.UsersService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin/users")
public class UsersController {

    private final UsersService usersService;

    // 유저 목록 조회
    @GetMapping
    public List<UsersResponseDto> getUsers() {
        return usersService.getUsers();
    }

    // 유저 상태 변경
    @PatchMapping("/status")
    public String updateUserStatus(@RequestBody UserStatusUpdateDto dto) {
        usersService.updateUserStatus(dto);
        return "SUCCESS";
    }
    //유저 검색
    @GetMapping("/search")
    public List<UsersResponseDto> searchUsers(
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String keyword) {
        return usersService.searchUsers(status, keyword);
    }
}