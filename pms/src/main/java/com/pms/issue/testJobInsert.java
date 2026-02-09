package com.pms.issue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class testJobInsert {
	// 일감 등록
	@GetMapping("issueinsert")
	public String issueadd() {
		return "issue/issue-insert";
	}
	
	@GetMapping("issueupdate")
	public String issueupdate() {
		return "issue/issue-update";
	}
	
	@GetMapping("issueinfo")
	public String issuedetails() {
		return "issue/issue-info";
	}
	
	@GetMapping("issuedetails/comments")
	public String issueComent() {
		return "common/fragments/issue/issue-comment :: CommentArea";
	}
	
	@GetMapping("issuedetails/history")
	public String issueHistory() {
		return "common/fragments/issue/issue-hisotry :: IssueHistoryArea";
	}
	@GetMapping("issuelist")
	public String issueList() {
		return "issue/issue-list";
	}

	
}
