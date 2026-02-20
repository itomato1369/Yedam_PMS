package com.pms.project.dto;

import org.apache.ibatis.type.Alias;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Alias("GanttDTO")
public class GanttDTO {
    private String id;
    private String text;

    @JsonProperty("start_date")
    private String startDate;

    @JsonProperty("end_date")
    private String endDate;

    private Double progress;
    private String parent;

    @JsonProperty("project_id")
    private String projectId;
    
    private int duration;
}