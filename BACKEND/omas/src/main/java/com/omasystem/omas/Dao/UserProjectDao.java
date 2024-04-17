package com.omasystem.omas.Dao;

import org.apache.ibatis.annotations.Mapper;

import com.omasystem.omas.Model.UserProjectModel;

@Mapper
public interface UserProjectDao {
    // Retrieves the projects involved of a user based on their employee ID
    UserProjectModel getProjectInvolvedOfUser(String emp_id);
}
