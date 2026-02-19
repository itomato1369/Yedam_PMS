package com.pms.setting.common.service;

import java.util.List;

import com.pms.setting.common.dto.CommonCodeDto;
import com.pms.setting.users.dto.UserStatusCountDto;

public interface CommonService {

    List<CommonCodeDto> getUserStatusCodes();

    List<CommonCodeDto> getProjectStatusCodes();
    
    List<UserStatusCountDto> getUserStatusWithCount();
}
