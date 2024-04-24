package com.omasystem.omas.Dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.omasystem.omas.Model.PrincipalModel;

@Mapper
public interface PrincipalDao {
    //get currently logged in user 
    PrincipalModel getPrincipal(String session);
    List<PrincipalModel> getAllPrincipalUsers();

     // PrincipalModel getPrincipalInfo(String username); //map data inside tbl_personal_info

}
