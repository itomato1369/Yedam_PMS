package com.yedam.pms.project;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class ProjectSecurityTest {

	@Autowired
	private MockMvc mockMvc;

	@Test
	@DisplayName("프로젝트 멤버 접근 확인")
	public void project_member_get() throws Exception {
		mockMvc.perform(get("/project/PMS100/")
						.with(user("song").roles("USER"))
						.with(csrf())
						)
				.andExpect(status().isOk());
	}
	
	@Test
	@DisplayName("권한 없는 유저의 접근 확인(403 error)")
	public void unauthorized_get() throws Exception {
		mockMvc.perform(get("/project/PMS100/")
						.with(user("tester").roles("USER"))
						)
				.andExpect(status().isForbidden());
	}
	
	@Test
	@DisplayName("관리자 접근 확인")
	public void admin_get() throws Exception {
		mockMvc.perform(get("/project/PMS100/")
						.with(user("admin").roles("ADMIN"))
						)
				.andExpect(status().isOk());
	}
}
