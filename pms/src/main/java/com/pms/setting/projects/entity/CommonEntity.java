package com.pms.setting.projects.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.FetchType;
import lombok.Getter;
import lombok.Setter; // Setter가 필요할 수 있어 추가했습니다.

@Entity
@Table(name = "COMMON")
@Getter
@Setter // 데이터를 업데이트하거나 저장할 때 필요합니다.
public class CommonEntity {

    @Id
    @Column(name = "COMMON_NO")
    private Long commonNo;

    @Column(name = "COMMON_NAME")
    private String commonName;
    
    // 추가: 설명 컬럼 (필요 없으시면 삭제해도 무방하지만 DB 구조에 맞춰 추가합니다)
    @Column(name = "COMMON_DESC")
    private String commonDesc;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "PARENT_COMMON_NO")
    private CommonEntity parent;

    // 추가: 논리 삭제 및 노출 여부 컬럼
    @Column(name = "DISPLAY_YN", length = 1, nullable = false)
    private String displayYn = "Y"; // 기본값을 'Y'로 설정
}