package com.pms.home.project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.pms.home.project.dto.HomeProjectDto;

@Mapper
public interface HomeProjectMapper {
	List<HomeProjectDto> findProjects(String userId);
}
