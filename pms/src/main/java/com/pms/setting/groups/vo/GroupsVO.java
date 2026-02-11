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
    private Integer status;	  // 상태 코드 (510: 활성, 520: 비활성 등)
    private String statusName; // ← 조회용 필드 (DB X)
}