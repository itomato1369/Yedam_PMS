package com.pms.project.dto;

import java.util.List;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString 
@Getter 
@Setter
@RequiredArgsConstructor
public class ProjectSelectDTO {
    private Long projectNo;
    private String projectName;
    private String projectDesc;
    
    // 계층 구조용
    private List<ProjectSelectDTO> childProjects; 
    
    // 집계 데이터
    private Integer memberCount;       // 하위 포함 중복제거 인원
    private Integer totalJobCount;     // 하위 포함 중복제거 일감
    
    private String latestJobContent; // 최신 일감 내용
    private String latestJobTitle;   // 최신 일감 제목
    private Boolean hasLoginUserJoined; // 로그인 사용자가 프로젝트에 참여했는지 여부
    //private double actualProgress; // 실제 가중치 진척도
}
