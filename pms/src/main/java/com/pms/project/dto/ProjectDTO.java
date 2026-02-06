package com.pms.project.dto;

import java.util.List;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString @Getter @Setter
@RequiredArgsConstructor
public class ProjectDTO {
    private Long projectNo;
    private String projectName;
    private String projectDesc;
    
    // 계층 구조용
    private List<ChildProjectDTO> childProjects; 
    
    // 집계 데이터
    private int memberCount;       // 하위 포함 중복제거 인원
    private int totalJobCount;     // 하위 포함 중복제거 일감
    //private double actualProgress; // 실제 가중치 진척도
}
