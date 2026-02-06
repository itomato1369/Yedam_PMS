package com.pms.setting.projects.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.FetchType;
import lombok.Getter;

@Entity
@Table(name = "COMMON")
@Getter
public class CommonEntity {

    @Id
    @Column(name = "COMMON_NO")
    private Long commonNo;

    @Column(name = "COMMON_NAME")
    private String commonName;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PARENT_COMMON_NO")
    private CommonEntity parent;
}