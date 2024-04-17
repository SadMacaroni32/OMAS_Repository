package com.omasystem.omas.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.omasystem.omas.Repo.tbl_userRepo;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {

    // Configuration class for the application
    
    // Repository for accessing user details
    private final tbl_userRepo tbl_userRepository;
    
    // Bean for providing user details service
    @Bean
    public UserDetailsService userDetailsService() {
        // Retrieves user details by username from the repository
        return username -> tbl_userRepository.findByUsername(username)
        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    // Bean for providing authentication provider
    @Bean
    public AuthenticationProvider authenticationProvider() {
        // Configures DaoAuthenticationProvider with custom user details service and password encoder
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    // Bean for providing authentication manager
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        // Retrieves authentication manager from Spring Security configuration
        return config.getAuthenticationManager();
    }

    // Bean for providing password encoder
    @Bean
    public PasswordEncoder passwordEncoder() {
        // Uses BCryptPasswordEncoder for encoding passwords
        return new BCryptPasswordEncoder();
    }
}
