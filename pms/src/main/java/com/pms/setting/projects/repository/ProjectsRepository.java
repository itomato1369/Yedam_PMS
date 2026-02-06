package com.pms.setting.projects.repository;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pms.setting.projects.entity.ProjectsEntity;

@Repository
public interface ProjectsRepository extends JpaRepository<ProjectsEntity, Long> {
    
    @Query("""
        SELECT p 
        FROM ProjectsEntity p 
        JOIN FETCH p.status s 
        WHERE (:status IS NULL OR s.commonNo = :status)
          AND (:keyword IS NULL OR :keyword = '' OR p.projectName LIKE %:keyword%)
        """)
    List<ProjectsEntity> search(
        @Param("status") Long status, // status 번호로 필터링
        @Param("keyword") String keyword
    );
}