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
    public void toggleGroupStatus(Long groupNo) {
        groupsMapper.toggleGroupStatus(groupNo);
    }
    
    @Override
    public void register(GroupsVO vo) {
        groupsMapper.insertGroup(vo);
    }

}