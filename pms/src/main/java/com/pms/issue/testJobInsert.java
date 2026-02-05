package com.pms.issue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testJobInsert {
	// 일감 등록
	@GetMapping("issueinsert")
	public String issueadd() {
		return "issue/issue_insert";
	}
	
	@GetMapping("issueupdate")
	public String issueupdate() {
		return "issue/issue_update";
	}
	
	@GetMapping("issuedetails")
	public String issuedetails() {
		return "issue/issue_details";
	}
	
	@GetMapping("issuedetails/comments")
	public String issueComent() {
		return "common/fragments/issue/issue_update_comment :: CommentArea";
	}
	
	@GetMapping("issuedetails/history")
	public String issueHistory() {
		return "common/fragments/issue/issue_hisotry :: IssueHistoryArea";
	}
	// 소요시간 등록
	@GetMapping("workinsert")
	public String workinsert() {
		return "work/work_insert";
	}
	
	
	
	
	
}
