package com.pms.setting.projects.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.setting.projects.entity.ProjectsEntity;

@Repository
public interface ProjectsRepository extends JpaRepository<ProjectsEntity, Long> {
	List<ProjectsEntity> findAll();
	
    List<ProjectsEntity> findByStatus(Integer status);

    List<ProjectsEntity> findByParentProjectNo(Long parentProjectNo);

}
