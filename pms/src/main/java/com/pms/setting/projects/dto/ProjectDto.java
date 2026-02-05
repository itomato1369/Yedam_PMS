package com.pms.setting.projects.dto;

import java.time.LocalDateTime;

import lombok.Data;

/*
 * @Getter @Setter public class ProjectDto {
 * 
 * private Long projectNo; private String projectName; private String
 * statusLabel; // "진행중" private String publicYnLabel; public void
 * setCreateAt(LocalDateTime createAt) { // TODO Auto-generated method stub
 * 
 * } }
 */

@Data
public class ProjectDto {
    private Long projectNo;
    private String projectName;
    private String statusLabel;
    private String publicYnLabel;
    private LocalDateTime createAt; 
}