package com.pms.issue;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class test01 {
	@GetMapping("jobinsert")
	public String jobadd() {
		return "job_insert";
	}
}
