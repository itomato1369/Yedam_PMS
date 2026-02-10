package com.pms.work.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WorkController {
	// 소요시간 등록
	@GetMapping("workinsert")
	public String workinsert() {
		return "work/work-insert";
	}
	
	@GetMapping("workupdate")
	public String workupdate() {
		return "work/work-update";
	}
	@GetMapping("workinfo")
	public String workinfo() {
		return "work/work-info";
	}
	@GetMapping("worklist")
	public String worklist() {
		return "work/work-list";
	}
	

}
