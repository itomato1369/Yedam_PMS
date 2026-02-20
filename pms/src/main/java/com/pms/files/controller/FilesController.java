package com.pms.files.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public void fileDownload(@PathVariable Integer detailsNo, HttpServletResponse res) {
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
		try (InputStream is = new FileInputStream(encryptedFile); OutputStream os = res.getOutputStream()) {
			fileCryptoUtil.decrypt(is, os);
		} catch (Exception e) {
			throw new RuntimeException("다운로드 중 오류가 발생했습니다.", e);
		}
	} // fileDownload

	@GetMapping("/zip")
	public void fileDownloadZip(@RequestParam List<Integer> detailsNos, HttpServletResponse res) throws Exception {
		String zipName = "pms_files_" + System.currentTimeMillis() + ".zip";
		res.setStatus(HttpServletResponse.SC_OK);
		res.setContentType("application/zip");
		res.setHeader(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + zipName + "\"");

		// zip 스트림
		try (ZipOutputStream zos = new ZipOutputStream(res.getOutputStream())) {
			int i = 1;
			
			for(Integer no : detailsNos) {
				// 파일 조회
				FilesDetailsEntity details = filesDetailsRepository.findById(no).orElse(null);
				if(details == null) {
					continue;
				}
				
				File enFile = new File(uploadPath, details.getFilesUuid());
				if (!enFile.exists()) {
					continue;
				}
				
				// zip에 들어갈 개별 엔트리 생성
				String orgName = details.getFilesName();
				String finalName = (i++) + "_" + orgName;
				
				ZipEntry zipEntry = new ZipEntry(finalName);
				zos.putNextEntry(zipEntry);
				
				// 암호화 파일 -> 복호화 -> zip 스트림
				// decrypt 시 스트림을 닫지 않도록 조심해야 됨
				// 자세한건 util decryptZip 주석 참고
				try (InputStream is = new FileInputStream(enFile)){
					fileCryptoUtil.decryptZip(is, zos);
				}				
				zos.closeEntry();				
			}
			zos.finish();
		} // fileDownloadZip

	}

}
