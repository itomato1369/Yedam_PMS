package com.pms.setting.groups.mapper;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.pms.setting.groups.vo.GroupsVO;

public interface GroupsMapper {

    List<GroupsVO> selectGroupAll();

    GroupsVO selectGroup(Long groupNo);

    List<GroupsVO> searchGroup(String keyword);

    void updateGroupStatus(
    	    @Param("groupNo") Long groupNo,
    	    @Param("status") Integer status
    	);

    void toggleGroupStatus(@Param("groupNo") Long groupNo);
}