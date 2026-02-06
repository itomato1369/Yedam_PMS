package com.pms.project.dto;

import groovy.transform.ToString;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @ToString
public class ChildProjectDTO {
    private Long projectNo;
    private String projectName;
    private String projectDesc;
}
