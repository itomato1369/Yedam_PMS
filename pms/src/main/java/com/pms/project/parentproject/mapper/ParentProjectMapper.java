package com.pms.project.parentproject.mapper;

import java.util.List;

import com.pms.project.parentproject.dto.ParentProjectDTO;

public interface ParentProjectMapper {
	List<ParentProjectDTO> selectAll();
}
