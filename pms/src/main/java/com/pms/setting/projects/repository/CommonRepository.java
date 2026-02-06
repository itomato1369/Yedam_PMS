package com.pms.setting.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.setting.projects.entity.CommonEntity;

@Repository
public interface CommonRepository extends JpaRepository<CommonEntity, Long> {
    // 특정 부모 코드(예: 프로젝트 상태군) 아래의 코드값만 조회
    List<CommonEntity> findByParentCommonNo(Long parentNo);
}