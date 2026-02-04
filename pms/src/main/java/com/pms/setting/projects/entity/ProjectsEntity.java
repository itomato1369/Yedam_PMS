package com.pms.setting.projects.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name = "PROJECT")
@Getter @Setter
public class ProjectsEntity {

    @Id
    @Column(name = "PROJECT_NO")
    private Long projectNo;

    @Column(name = "PROJECT_NAME")
    private String projectName;

    @Column(name = "USER_ID")
    private String userId;  // 프로젝트 생성자

    @Column(name = "PROJECT_DESC")
    private String projectDesc;

    @Column(name = "PROJECT_HOME")
    private String projectHome;

    @Column(name = "PROJECT_CODE")
    private String projectCode;

    @Column(name = "CREATE_AT")
    private LocalDateTime createAt;

    @Column(name = "UPDATE_AT")
    private LocalDateTime updateAt;

    @Column(name = "PARENT_MEMBER_YN")
    private Integer parentMemberYn;  // 상위 프로젝트 멤버 상속 여부

    @Column(name = "PUBLIC_YN")
    private Integer publicYn;  // 공개 프로젝트 여부

    @Column(name = "STATUS")
    private Integer status;    // 1=활성, 0=비활성

    @Column(name = "PARENT_PROJECT_NO")
    private Long parentProjectNo;  // 계층 구조용
}
