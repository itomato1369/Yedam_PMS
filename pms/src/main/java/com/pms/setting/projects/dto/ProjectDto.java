package com.pms.setting.projects.dto;

import java.time.LocalDateTime;
import lombok.Data;

@Data
public class ProjectDto {
    private Long projectNo;
    private String projectName;
    
    // 상태 관련 데이터
    private Integer statusValue;   // DB의 숫자값 (예: 1, 2)
    private String statusLabel;    // 조인해서 가져온 이름 (예: "진행중", "완료")
    
    // 공개 여부
    private Integer publicYn;      // DB의 숫자값 (0 또는 1)
    private String publicYnLabel;  // "공개" 또는 "비공개"
    
    private LocalDateTime createAt; 
}