package com.pms.setting.groups.info.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pms.setting.groups.info.dto.GroupDetailDto;
import com.pms.setting.groups.info.service.GroupService;
import com.pms.setting.groups.info.vo.UserVo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/groups")
@RequiredArgsConstructor
public class GroupRestController {

    private final GroupService groupService;

    // 1. 그룹 상세 정보 전체 조회
    @GetMapping("/{groupNo}")
    public ResponseEntity<GroupDetailDto> getGroupDetail(@PathVariable Long groupNo) {
        GroupDetailDto detail = groupService.getGroupDetail(groupNo);
        return ResponseEntity.ok(detail);
    }

    // 2. 그룹에 추가 가능한 유저 검색 (라이브 검색용)
    @GetMapping("/{groupNo}/available-users")
    public ResponseEntity<List<UserVo>> searchAvailableUsers(
            @PathVariable Long groupNo, 
            @RequestParam("keyword") String keyword) {
        return ResponseEntity.ok(groupService.searchAvailableUsers(groupNo, keyword));
    }

    // 3. 멤버 추가
    @PostMapping("/{groupNo}/members")
    public ResponseEntity<String> addMember(@PathVariable Long groupNo, @RequestBody Map<String, String> payload) {
        String userId = payload.get("userId");
        if (groupService.addMemberToGroup(groupNo, userId)) {
            return ResponseEntity.ok("멤버가 성공적으로 추가되었습니다.");
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("멤버 추가에 실패했습니다. (이미 존재하거나 유효하지 않은 유저)");
    }

    // 4. 멤버 삭제
    @DeleteMapping("/{groupNo}/members/{userId}")
    public ResponseEntity<Void> removeMember(@PathVariable Long groupNo, @PathVariable String userId) {
        groupService.removeMemberFromGroup(groupNo, userId);
        return ResponseEntity.ok().build();
    }

    // 5. 역할(권한) 부여/회수
    @PostMapping("/{groupNo}/roles/{roleNo}")
    public ResponseEntity<Void> grantRole(@PathVariable Long groupNo, @PathVariable Long roleNo) {
        groupService.grantRoleToGroup(groupNo, roleNo);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{groupNo}/roles/{roleNo}")
    public ResponseEntity<Void> revokeRole(@PathVariable Long groupNo, @PathVariable Long roleNo) {
        groupService.revokeRoleFromGroup(groupNo, roleNo);
        return ResponseEntity.ok().build();
    }
}