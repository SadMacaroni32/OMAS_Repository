package com.omasystem.omas.Repo; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

import com.omasystem.omas.Entity.tbl_personal_info; 

@Repository 
public interface tbl_personal_infoRepo extends JpaRepository<tbl_personal_info, Long>{ // Declaration of tbl_personal_infoRepo interface, extending JpaRepository with tbl_personal_info entity and Long as the type of the entity's primary key
    
}