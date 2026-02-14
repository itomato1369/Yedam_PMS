package com.pms.issue.service;

import java.io.File;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.pms.issue.mapper.IssueMapper;
import com.pms.issue.web.IssueDto;
import com.pms.issue.web.IssueFileDetailsDto;
import com.pms.issue.web.IssueFileUploadDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class IssueService {

	private final String uploadPath = "D:/pms/uploads/";
	private final IssueMapper issueMapper;

	// 일감 리스트
	public List<IssueDto> findIssueList(String userId) {
		List<IssueDto> issueList = issueMapper.selectIssue(userId);
		return issueList;
	}

	// 일감 등록
	@Transactional
	public Integer addIssue(IssueDto issueDto, List<MultipartFile> files) {
		if (!StringUtils.hasText(issueDto.getTitle())) {
			throw new RuntimeException("제목은 필수 입력 사항입니다.");
		}
		
		issueMapper.insertIssue(issueDto);
		
		Integer jobNo = issueDto.getJobNo();
		String userId = issueDto.getUserId();
		if (!CollectionUtils.isEmpty(files)) {
			for (MultipartFile file : files) {
				// 첨부파일 등록 -> 상세내용 등록
				uploadIssueFiles(jobNo, userId, file);
			}
		}

		return jobNo;
	}

	// 첨부파일
	private void uploadIssueFiles(Integer jobNo, String userId, MultipartFile file) {
		IssueFileUploadDto uploadDto = new IssueFileUploadDto();
		uploadDto.setJobNo(jobNo);
		uploadDto.setUserId(userId);
		issueMapper.insertIssueFile(uploadDto);

		IssueFileDetailsDto detailDto = saveFileDetails(uploadDto.getFilesNo(), file);
		issueMapper.insertIssueFileDetails(detailDto);
	}

	// 상세내용
	private IssueFileDetailsDto saveFileDetails(Integer fileNo, MultipartFile file) {
		String fileName = file.getOriginalFilename();
		String fileUuid = UUID.randomUUID().toString() + "_" + fileName;

		try {
			File filePath = new File(uploadPath);

			// 폴더 생성
			if (!filePath.exists()) {
				filePath.mkdirs();
			}

			// 하드에 파일 저장
			file.transferTo(new File(filePath, fileUuid));

			IssueFileDetailsDto fileDetailDto = new IssueFileDetailsDto();
			fileDetailDto.setFilesNo(fileNo);
			fileDetailDto.setFilesName(fileName);
			fileDetailDto.setFilesSize(file.getSize());
			fileDetailDto.setFilesType(file.getContentType());
			fileDetailDto.setFilesPath(filePath + "/" + fileUuid);

			return fileDetailDto;
		} catch (Exception e) {
			throw new RuntimeException("파일 저장 중 오류가 발생했습니다.", e);
		}
	}
}
