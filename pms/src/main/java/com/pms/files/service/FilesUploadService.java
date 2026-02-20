package com.pms.files.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pms.files.entity.FilesDetailsEntity;
import com.pms.files.entity.FilesEntity;
import com.pms.files.repository.FilesDetailsRepository;
import com.pms.files.repository.FilesRepository;
import com.pms.files.util.FileCryptoUtil;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class FilesUploadService {

    private final FilesDetailsRepository filesDetailsRepository;
	private final FilesRepository filesRepository;
	private final FileCryptoUtil fileCryptoUtil;

	@Value("${file.upload.path}")
	private String uploadPath;

	public Integer uploadFiles(List<MultipartFile> files, String userId) throws Exception {
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
			File target = new File(uploadDir, fileUuid);
			
			try (InputStream is = file.getInputStream();
				OutputStream os = new FileOutputStream(target)) {
				fileCryptoUtil.encrypt(is, os);
			}
			
			FilesDetailsEntity filesDetails = FilesDetailsEntity
												.builder()
												.filesEntity(filesEntity)
												.filesName(fileName)
												.filesUuid(fileUuid)
												.filesSize(file.getSize())
												.filesType(file.getContentType())
												.filesPath(uploadPath)
												.build();
			filesDetailsRepository.save(filesDetails);			
		}
		
		return filesEntity.getFilesNo();
	}
}
