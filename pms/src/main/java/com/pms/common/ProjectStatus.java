package com.pms.common;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ProjectStatus {

    IN_PROGRESS(310, "진행중"),
    STOPPED(320, "중단"),
    ARCHIVED(330, "잠금보관"),
    CLOSED(340, "종료");

    private final int code;
    private final String label;

    public static String getLabel(int code) {
        for (ProjectStatus s : values()) {
            if (s.code == code) return s.label;
        }
        return "알수없음";
    }
}