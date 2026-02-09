package com.pms.setting.common.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.setting.common.dto.CommonCodeDto;
import com.pms.setting.common.service.CommonService;
import com.pms.setting.users.dto.UserStatusCountDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/settings/api/common")
public class CommonController {

    private final CommonService commonService;

    // ⭐ 유저 상태
    @GetMapping("/user-status")
    public List<CommonCodeDto> userStatus() {
        return commonService.getUserStatusCodes();
    }
    // 유저 상태 카운트
    @GetMapping("/user-status-count")
    public List<UserStatusCountDto> getUserStatusCount() {
        return commonService.getUserStatusWithCount();
    }
    
    // ⭐ 프로젝트 상태
    @GetMapping("/project-status")
    public List<CommonCodeDto> projectStatus() {
        return commonService.getProjectStatusCodes();
    }
}
