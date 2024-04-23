package com.omasystem.omas.Repo; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

import com.omasystem.omas.Entity.tbl_user_project; 

@Repository 
public interface tbl_user_projectRepo extends JpaRepository<tbl_user_project, Long>{ // Declaration of tbl_personal_infoRepo interface, extending JpaRepository with tbl_personal_info entity and Long as the type of the entity's primary key
    
}