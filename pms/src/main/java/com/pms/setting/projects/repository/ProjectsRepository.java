package com.pms.setting.projects.repository;

import java.util.List;

// [수정] MyBatis용 Param을 지우고 Spring Data용으로 교체!
import org.springframework.data.repository.query.Param; 
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.pms.setting.projects.entity.ProjectsEntity;

@Repository
public interface ProjectsRepository extends JpaRepository<ProjectsEntity, Long> {
	
	@Modifying(clearAutomatically = true, flushAutomatically = true)
	@Transactional
	@Query("UPDATE ProjectsEntity p SET p.status.commonNo = 390 WHERE p.projectNo = :projectNo")
	void updateStatusToDelete(@Param("projectNo") Long projectNo);

	@Query("""
			    SELECT p
			    FROM ProjectsEntity p
			    LEFT JOIN FETCH p.status s
			    WHERE (:status IS NULL OR s.commonNo = :status)
			      AND (:status IS NOT NULL OR s.commonNo IS NULL OR s.commonNo != 390)
			      AND (:publicYn IS NULL OR p.publicYn = :publicYn)
			      AND (:keyword IS NULL OR :keyword = '' OR p.projectName LIKE CONCAT('%', :keyword, '%'))
			    ORDER BY p.createAt DESC, p.projectNo DESC
			""")
	List<ProjectsEntity> search(
        @Param("status") Long status, 
        @Param("publicYn") Integer publicYn, 
        @Param("keyword") String keyword
    );
}