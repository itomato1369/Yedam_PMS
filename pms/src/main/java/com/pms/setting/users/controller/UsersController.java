package com.pms.setting.users.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pms.setting.users.dto.UserStatusUpdateDto;
import com.pms.setting.users.dto.UsersResponseDto;
import com.pms.setting.users.service.UsersService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/settings/api/users") // 경로 확인
public class UsersController {

    private final UsersService usersService;

    // 유저 검색 (AJAX 호출용)
    // JS에서 보낸 status와 keyword를 여기서 받습니다.
    @GetMapping("/search")
    public List<UsersResponseDto> searchUsers(
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String keyword) {
        return usersService.searchUsers(status, keyword);
    }

    // 유저 상태 변경 (PATCH)
    @PatchMapping("/status")
    public String updateUserStatus(@RequestBody UserStatusUpdateDto dto) {
        usersService.updateUserStatus(dto);
        return "SUCCESS";
    }

    // 유저 삭제 (기존 프로젝트 코드의 DELETE 기능 대응)
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable String id) {
        // usersService.deleteUser(id); // 삭제 로직 구현 필요
        return "SUCCESS";
    }
    
    @GetMapping("/exclude")
    public List<UsersResponseDto> getUsersExcludeStatus(
            @RequestParam(required = false) Integer status) {
        return usersService.getUsersExcludeStatus(status);
    }

}
