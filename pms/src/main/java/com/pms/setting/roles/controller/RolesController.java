package com.pms.setting.roles.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pms.setting.roles.service.RolesService;
import com.pms.setting.roles.vo.RolesVO;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/settings/api/roles")
public class RolesController {

    private final RolesService rolesService; // 서비스 주입

    @GetMapping
    public List<RolesVO> getAll() {
        return rolesService.getAllRoles();
    }

    @GetMapping("/search")
    public List<RolesVO> search(@RequestParam(required = false) String keyword) {
        return rolesService.searchRoles(keyword);
    }
    
    @DeleteMapping("/{roleNo}")
    public void deleteRole(@PathVariable Long roleNo) {
        rolesService.removeRole(roleNo);
    }
}