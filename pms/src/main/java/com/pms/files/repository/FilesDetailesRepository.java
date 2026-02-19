package com.pms.files.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pms.files.entity.FilesDetailsEntity;

public interface FilesDetailesRepository extends JpaRepository<FilesDetailsEntity, Integer> {
	List<FilesDetailsEntity> findByFilesNo(Integer filesNo);
}
