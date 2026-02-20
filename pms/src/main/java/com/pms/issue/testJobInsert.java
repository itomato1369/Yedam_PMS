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
	
	@GetMapping("issueinfo")
	public String issuedetails() {
		return "issue/issue_info";
	}
	
	@GetMapping("issuedetails/comments")
	public String issueComent() {
		return "common/fragments/issue/issue_update_comment :: CommentArea";
	}
	
	@GetMapping("issuedetails/history")
	public String issueHistory() {
		return "common/fragments/issue/issue_hisotry :: IssueHistoryArea";
	}
	@GetMapping("issuelist")
	public String issueList() {
		return "issue/issue_list";
	} 
   
	
}
