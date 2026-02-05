package com.pms.project.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.pms.project.dto.ProjectDTO;

@Mapper
public interface ProjectMapper {
	public abstract List<ProjectDTO> selectAll();
}
