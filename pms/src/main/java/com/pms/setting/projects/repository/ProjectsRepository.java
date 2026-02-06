package com.pms.setting.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param; // 이 녀석이 진짜입니다.
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.projects.entity.ProjectsEntity;

@Repository
public interface ProjectsRepository extends JpaRepository<ProjectsEntity, Long> {
	// @Modifying은 조회가 아닌 수정을 할 때 필수입니다.
	
    @Modifying 
    @Transactional
    @Query("UPDATE ProjectsEntity p SET p.status.commonNo = 390 WHERE p.projectNo = :projectNo")
    void updateStatusToDelete(@Param("projectNo") Long projectNo);
    
	@Query("""
		    SELECT p 
		    FROM ProjectsEntity p 
		    LEFT JOIN FETCH p.status s 
		    WHERE s.commonNo != 390
		      AND (:status IS NULL OR s.commonNo = :status)
		      AND (:publicYn IS NULL OR p.publicYn = :publicYn)
		      AND (:keyword IS NULL OR :keyword = '' OR p.projectName LIKE CONCAT('%', :keyword, '%'))
		    """)
		List<ProjectsEntity> search(
		    @Param("status") Long status, 
		    @Param("publicYn") Integer publicYn, 
		    @Param("keyword") String keyword
		);
}