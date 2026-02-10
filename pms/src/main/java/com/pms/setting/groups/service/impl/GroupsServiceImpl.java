package com.pms.setting.groups.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pms.setting.groups.mapper.GroupsMapper;
import com.pms.setting.groups.service.GroupsService;
import com.pms.setting.groups.vo.GroupsVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GroupsServiceImpl implements GroupsService {

    private final GroupsMapper groupsMapper;

    @Override
    public List<GroupsVO> getGroupAll() {
        return groupsMapper.selectGroupAll();
    }

    @Override
    public GroupsVO getGroup(Long groupNo) {
        return groupsMapper.selectGroup(groupNo);
    }
    
    @Override
    public List<GroupsVO> search(String keyword) {
        // keyword 없으면 전체조회로 처리 (UX 좋음)
        if (keyword == null || keyword.isBlank()) {
            return groupsMapper.selectGroupAll();
        }
        return groupsMapper.searchGroup(keyword);
    }
    
    @Override
    public void updateGroupStatus(Long groupNo, Integer status) {

        // 방어코드 (선택이지만 추천)
        if(status != 510 && status != 520){
            throw new IllegalArgumentException("잘못된 상태값입니다.");
        }

        groupsMapper.updateGroupStatus(groupNo, status);
    }
    
    @Override
    public void toggleGroupStatus(Long groupNo) {
        groupsMapper.toggleGroupStatus(groupNo);
    }

}