package com.pms.setting.users.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "USERS")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UsersEntity {

    /** 로그인 ID (PK) */
    @Id
    @Column(name = "USER_ID", nullable = false, length = 255)
    private String userId;

    /** 비밀번호 */
    @Column(name = "PASSWD", length = 255)
    private String passwd;

    /** 사용자 이름 (100 CHAR) */
    @Column(name = "USERNAME", length = 100)
    private String username;

    /** 관리자 여부 (0 또는 1) */
    @Column(name = "ADMIN", precision = 1)
    private Integer admin;

    /** 계정 상태 */
    @Column(name = "STATUS")
    private Integer status;

    /** 마지막 로그인 시간 */
    @Column(name = "LASTLOGIN")
    private LocalDateTime lastLogin;

    /** 계정 생성 시간 */
    @Column(name = "CREATETIME")
    private LocalDateTime createTime;

    /** 이메일 */
    @Column(name = "EMAIL", length = 50)
    private String email;

    /** 최초 저장 시 생성시간 자동 세팅 */
    @PrePersist
    public void prePersist() {
        if (this.createTime == null) {
            this.createTime = LocalDateTime.now();
        }
    }
}
