package com.omasystem.omas.Entity;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_user")
public class tbl_user implements UserDetails {

    @Id
    private String emp_id; // Employee ID
    private String username; // Username
    private String password; // Password
    private int position_id; // Position ID
    private int dept_id; // Department ID
    private int section_id; // Section ID
    private String status_code; // Status code
    private int role_id; // Role ID
    private String img_src; // Image source

    @JsonIgnore
    @Override
    public boolean isAccountNonExpired() {
        return true; // Account non-expiration status
    }
    @JsonIgnore
    @Override
    public boolean isAccountNonLocked() {
        return true; // Account non-locked status
    }
    @JsonIgnore
    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Credentials non-expiration status
    }
    @JsonIgnore
    @Override
    public boolean isEnabled() {
        return true; // Account enabled status
    }
    @JsonIgnore
    @Enumerated(EnumType.STRING)
    @Transient
    private Role role; // User role
    
    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (role == null) {
            return null; // Return an empty collection if role is null
        } else {
            return Collections.singleton(new SimpleGrantedAuthority(role.name()));
        }
    }

}
