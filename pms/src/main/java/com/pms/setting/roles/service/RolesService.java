package com.pms.setting.roles.service;

import java.util.List;
import com.pms.setting.roles.vo.RolesVO;

public interface RolesService {
    // 전체 권한 조회
    List<RolesVO> getAllRoles();
    
    // 키워드로 권한 검색
    List<RolesVO> searchRoles(String keyword);
    
    void register(RolesVO vo);
    
    void removeRole(Long roleNo);
}