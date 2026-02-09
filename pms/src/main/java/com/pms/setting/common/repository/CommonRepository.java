package com.pms.setting.common.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.pms.setting.common.entity.CommonEntity;
import com.pms.setting.users.dto.UserStatusCountDto;

@Repository
public interface CommonRepository extends JpaRepository<CommonEntity, Long> {

	// ⭐ 핵심: parent.commonNo
	List<CommonEntity> findByParent_CommonNoAndDisplayYn(Long parentNo, String displayYn);

	@Query("""
			 		SELECT new com.pms.setting.users.dto.UserStatusCountDto(
			 		    c.commonNo,
			 		    c.commonName,
			 		    COUNT(u.userId)
			 		)
			 		FROM CommonEntity c
			 		LEFT JOIN UsersEntity u
			 		ON u.status = c.commonNo
					AND u.status IN (110,120,130)
			 		WHERE c.parent.commonNo = :parentNo
			 		AND c.displayYn = 'Y'
			 		GROUP BY c.commonNo, c.commonName
			 		ORDER BY c.commonNo
			 		""")
	List<UserStatusCountDto> findUserStatusWithCount(Long parentNo);
}
