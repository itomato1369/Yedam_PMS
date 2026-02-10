package com.pms.setting.groups.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GroupsVO {
    
    private Long groupNo;      // GROUP_NO
    private String groupName;  // GROUPNAME
    private Integer status;

    private String statusName; // ← 조회용 필드 (DB X)
}