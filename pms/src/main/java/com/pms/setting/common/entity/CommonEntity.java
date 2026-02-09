package com.pms.setting.common.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "COMMON")
@Getter
@Setter
public class CommonEntity {

    @Id
    @Column(name = "COMMON_NO")
    private Long commonNo;

    @Column(name = "COMMON_NAME")
    private String commonName;

    @Column(name = "COMMON_DESC")
    private String commonDesc;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PARENT_COMMON_NO")
    private CommonEntity parent;

    @Column(name = "DISPLAY_YN", length = 1)
    private String displayYn = "Y";
}
