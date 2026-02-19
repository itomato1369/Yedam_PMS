package com.pms.files.service;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pms.files.entity.FilesDetailsEntity;
import com.pms.files.entity.FilesEntity;
import com.pms.files.repository.FilesDetailesRepository;
import com.pms.files.repository.FilesRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FilesUploadService {

    private final FilesDetailesRepository filesDetailesRepository;

	private final FilesRepository filesRepository;

	@Value("${file.upload.path}")
	private String uploadPath;

	public Integer uploadFiles(List<MultipartFile> files, String userId) throws IllegalStateException, IOException {
		if(files == null || files.isEmpty()) {
			return null;
		}
		
		// 파일 부모 생성
		FilesEntity filesEntity = FilesEntity.builder()
									.userId(userId)
									.build();
		filesRepository.save(filesEntity);
		
		// 폴더 경로 생성
		File uploadDir = new File(uploadPath);
		if (!uploadDir.exists()) {
			uploadDir.mkdirs();
		}
		
		// 하드에 파일 저장
		for (MultipartFile file : files) {
			String fileName = file.getOriginalFilename();
			String fileUuid = UUID.randomUUID().toString() + "_" + fileName;

			file.transferTo(new File(uploadPath + fileUuid));
			
			FilesDetailsEntity filesDetails = FilesDetailsEntity
												.builder()
												.filesEntity(filesEntity)
												.filesName(fileName)
												.filesUuid(fileUuid)
												.filesSize(file.getSize())
												.filesType(file.getContentType())
												.filesPath(uploadPath)
												.build();
			filesDetailesRepository.save(filesDetails);			
		}
		
		return filesEntity.getFilesNo();
	}
}
