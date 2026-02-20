package com.pms.files.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriUtils;

import com.pms.files.entity.FilesDetailsEntity;
import com.pms.files.repository.FilesDetailsRepository;
import com.pms.files.util.FileCryptoUtil;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
@RequestMapping("/download")
public class FilesController {

	private final FilesDetailsRepository filesDetailsRepository;
	private final FileCryptoUtil fileCryptoUtil;

	@Value("${file.upload.path}")
	private String uploadPath;
	
	@GetMapping("/{detailsNo}")
	public void fileDownload (@PathVariable Integer detailsNo, HttpServletResponse res) {
		// DB에서 파일 조회
		FilesDetailsEntity details = filesDetailsRepository.findById(detailsNo)
				.orElseThrow(() -> new RuntimeException("일치하는 파일이 존재하지 않습니다."));
		
		// 파일 경로 확인
		File encryptedFile = new File(uploadPath, details.getFilesUuid());
		if (!encryptedFile.exists()) {
			throw new RuntimeException("저장된 경로가 맞지 않습니다.");
		}
		
		// 헤더 설정
		// 한글 깨짐 방지
		String encodedFileName = UriUtils.encode(details.getFilesName(), StandardCharsets.UTF_8);
		res.setContentType("application/octet-stream");
		res.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + encodedFileName + "\"");
		res.setContentLengthLong(details.getFilesSize());
	
		// 복호화 -> 스트림 전송
		try (InputStream is = new FileInputStream(encryptedFile);
			OutputStream os = res.getOutputStream()){
			fileCryptoUtil.decrypt(is, os);
		} catch (Exception e) {
			throw new RuntimeException("다운로드 중 오류가 발생했습니다.", e);
		}
	
	}
	
}
