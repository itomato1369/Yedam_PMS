package com.pms.issue;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.pms.issue.mapper.IssueMapper;

@ExtendWith(MockitoExtension.class)
public class IssueMockTest {

	@Mock
	private IssueMapper issueMapper;
}
