package com.pms.setting.common.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.common.dto.CommonCodeDto;
import com.pms.setting.common.repository.CommonRepository;
import com.pms.setting.common.service.CommonService;
import com.pms.setting.users.dto.UserStatusCountDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CommonServiceImpl implements CommonService {

    private final CommonRepository commonRepository;

    // 부모 코드 번호 (DB 기준)
    private static final Long USER_STATUS_PARENT = 100L;
    private static final Long PROJECT_STATUS_PARENT = 300L;

    @Override
    public List<CommonCodeDto> getUserStatusCodes() {
        return commonRepository
                .findByParent_CommonNoAndDisplayYn(USER_STATUS_PARENT, "Y")
                .stream()
                .map(c -> new CommonCodeDto(c.getCommonNo(), c.getCommonName()))
                .toList();
    }

    @Override
    public List<CommonCodeDto> getProjectStatusCodes() {
        return commonRepository
                .findByParent_CommonNoAndDisplayYn(PROJECT_STATUS_PARENT, "Y")
                .stream()
                .map(c -> new CommonCodeDto(c.getCommonNo(), c.getCommonName()))
                .toList();
    }
    
    public List<UserStatusCountDto> getUserStatusWithCount() {
        return commonRepository.findUserStatusWithCount(100L);
    }
}
