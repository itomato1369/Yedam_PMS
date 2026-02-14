package com.pms.issue;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.internal.matchers.Any;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.pms.issue.mapper.IssueMapper;
import com.pms.issue.service.IssueService;
import com.pms.issue.web.IssueDto;
import com.pms.issue.web.IssueFileDetailsDto;
import com.pms.issue.web.IssueFileUploadDto;

@ExtendWith(MockitoExtension.class)
public class IssueMockTest {

	@Mock
	private IssueMapper issueMapper;

	@InjectMocks
	private IssueService issueService;

	@Test
	@DisplayName("접속한 사용자의 일감을 가져오는지 확인")
	public void findIssueMockTest() {
		System.out.println("[Mock] FIND ISSUE TEST START");

		// given
		String userId = "mockUser";
		IssueDto issue1 = new IssueDto();
		issue1.setTitle("첫 번째 이슈");
		IssueDto issue2 = new IssueDto();
		issue2.setTitle("두 번째 이슈");
		when(issueMapper.selectIssue(userId)).thenReturn(Arrays.asList(issue1, issue2));

		// when
		List<IssueDto> issueList = issueService.findIssueList(userId);

		// then
		assertThat(issueList).hasSize(2);
		assertThat(issueList.get(0).getTitle()).isEqualTo("첫 번째 이슈");
		assertThat(issueList.get(1).getTitle()).isEqualTo("두 번째 이슈");
		verify(issueMapper, times(1)).selectIssue(userId);

		System.out.println("[Mock] FIND ISSUE TEST SUCCESS");
	}

	@Test
	@DisplayName("등록된 일감 번호를 제대로 반환하는지 확인")
	public void insertIssueMockTest() {
		System.out.println("[Mock] INSERT ISSUE TEST START");

		// given
		IssueDto issueDto = new IssueDto();
		issueDto.setTitle("MyBatis 반환 테스트 이슈");
		doAnswer(invocation -> {
			IssueDto dto = invocation.getArgument(0);
			dto.setJobNo(101);
			return null;
		}).when(issueMapper).insertIssue(issueDto);

		// when
		List<MultipartFile> files = Collections.emptyList();
		Integer jobNo = issueService.addIssue(issueDto, files);

		// then
		assertThat(jobNo).isEqualTo(101);
		verify(issueMapper).insertIssue(issueDto);

		System.out.println("[Mock] INSERT ISSUE TEST SUCCESS");
	}

	@Test
	@DisplayName("일감 제목이 없을 시 예외 발생 확인")
	public void issueNullTitleMockTest() {
		System.out.println("[Mock] NULL TITLE TEST START");
				
		// given
		IssueDto issueDto = new IssueDto();
		
		// when -> then
		List<MultipartFile> files = Collections.emptyList();
		assertThatThrownBy(() -> issueService.addIssue(issueDto, files))
								.isInstanceOf(RuntimeException.class)
								.hasMessageContaining("제목은 필수 입력 사항입니다.");

		System.out.println("[Mock] NULL TITLE TEST SUCCESS");
	}
	
	@Test
	@DisplayName("첨부파일 등록 시 상세정보까지 저장되는지 확인")
	public void insertIssueAndFileMockTest() {
		System.out.println("[Mock] FILE UPLOAD TEST START");
		
		// given
		IssueDto issueDto = new IssueDto();
		issueDto.setTitle("첨부파일 등록 테스트");
//		issueDto.setUserId("mockUser");
		
		MockMultipartFile mockFile = new MockMultipartFile(
				"testFiles", 
				"test_type.java",
				"application/java",
				"test content".getBytes()
				);
		List<MultipartFile> files = Arrays.asList(mockFile);
		
		// 일감 저장시 job_no 1001 저장
		doAnswer(invocation -> {
			IssueDto dto = invocation.getArgument(0);
			dto.setJobNo(1001);
			return null;
		}).when(issueMapper).insertIssue(issueDto);
		
		// 첨부파일 저장 시 files_no 3001 저장
		doAnswer(invocation -> {
			IssueFileUploadDto dto = invocation.getArgument(0);
			dto.setFilesNo(3001);
			return null;
		}).when(issueMapper).insertIssueFile(any(IssueFileUploadDto.class));
		
		// when
		Integer jobNo = issueService.addIssue(issueDto, files);
		
		// then
		assertThat(jobNo).isEqualTo(1001);
		verify(issueMapper, times(1)).insertIssue(issueDto);
		verify(issueMapper, times(1)).insertIssueFile(any(IssueFileUploadDto.class));
		verify(issueMapper, times(1)).insertIssueFileDetails(any(IssueFileDetailsDto.class));
		
		System.out.println("[Mock] FILE UPLOAD TEST SUCCESS");
	}
	
}
