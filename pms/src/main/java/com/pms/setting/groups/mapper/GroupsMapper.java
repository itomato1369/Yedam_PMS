package com.pms.setting.groups.mapper;

import java.util.List;

import com.pms.setting.groups.vo.GroupsVO;

public interface GroupsMapper {

    public List<GroupsVO> selectGroupAll();
    
    public GroupsVO selectGroup(Long groupNo);
    
    // 🔹 검색용
    List<GroupsVO> searchGroup(String keyword);
}
