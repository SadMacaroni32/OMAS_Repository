package com.omasystem.omas.Dao;

import org.apache.ibatis.annotations.Mapper;

import com.omasystem.omas.Model.UserModel;

@Mapper
public interface UserDao {
    // Retrieves the principal user based on the session
    UserModel getPrincipal(String session);
}
