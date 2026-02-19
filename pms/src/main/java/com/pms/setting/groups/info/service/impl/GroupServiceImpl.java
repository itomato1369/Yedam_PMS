package com.pms.setting.groups.info.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.groups.info.dto.GroupDetailDto;
import com.pms.setting.groups.info.mapper.GroupMapper;
import com.pms.setting.groups.info.service.GroupService;
import com.pms.setting.groups.info.vo.GroupVo;
import com.pms.setting.groups.info.vo.UserVo;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor // Lombok: Mapper 자동 주입
public class GroupServiceImpl implements GroupService {

    private final GroupMapper groupMapper;

    @Override
    @Transactional(readOnly = true)
    public GroupDetailDto getGroupDetail(Long groupNo) {
        return groupMapper.selectGroupDetail(groupNo);
    }

    @Override
    @Transactional
    public boolean updateGroupInfo(GroupVo groupVo) {
        return groupMapper.updateGroup(groupVo) > 0;
    }

    @Override
    @Transactional
    public boolean addMemberToGroup(Long groupNo, String userId) {
        // [비즈니스 로직] 이미 멤버인지 체크하는 과정이 필요할 수 있습니다.
        // 여기서는 Mapper의 영향받은 행(row) 수로 성공 여부를 판단합니다.
        try {
            return groupMapper.insertMember(groupNo, userId) > 0;
        } catch (Exception e) {
            // PK 중복 등으로 인한 에러 발생 시 처리
            return false;
        }
    }

    @Override
    @Transactional
    public boolean removeMemberFromGroup(Long groupNo, String userId) {
        return groupMapper.deleteMember(groupNo, userId) > 0;
    }

    @Override
    @Transactional
    public boolean grantRoleToGroup(Long groupNo, Long roleNo) {
        try {
            return groupMapper.insertGroupRole(groupNo, roleNo) > 0;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    @Transactional
    public boolean revokeRoleFromGroup(Long groupNo, Long roleNo) {
        return groupMapper.deleteGroupRole(groupNo, roleNo) > 0;
    }

    @Override
    @Transactional(readOnly = true)
    public List<UserVo> searchAvailableUsers(Long groupNo, String keyword) {
        // 이 부분은 Mapper에 "해당 groupNo에 없는 유저만 검색"하는 쿼리를 
        // 추가로 작성한 뒤 호출하면 아주 완벽합니다!
        return groupMapper.selectAvailableUsers(groupNo, keyword);
    }
}