package com.pms.setting.projects.service;

import java.util.List;

import com.pms.setting.common.entity.CommonEntity;
import com.pms.setting.projects.dto.SettingProjectDto;

public interface ProjectsService {
    List<SettingProjectDto> getAllProjects();
    
    List<SettingProjectDto> searchProjects(Integer status, String keyword);
    
    List<CommonEntity> getStatusList();

    // 논리 삭제 기능 추가!
    void logicalDelete(Long projectNo); 
}