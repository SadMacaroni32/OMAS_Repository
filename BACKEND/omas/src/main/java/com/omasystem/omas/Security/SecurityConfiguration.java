package com.omasystem.omas.Security;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    
    private final JwtAuthenticationFilter jwtAuthFilter; // JwtAuthenticationFilter bean
    private final AuthenticationProvider authenticationProvider; // AuthenticationProvider bean
    private final String[] Whitelist = { // Whitelist of URLs that don't require authentication
        "/api/auth/register",
        "/api/auth/authenticate"
    };

    //Added cors config
    @SuppressWarnings("deprecation")
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF protection
                .cors(cors -> cors.configurationSource(request -> {
                    CorsConfiguration configuration = new CorsConfiguration();
                    configuration.setAllowedOrigins(Arrays.asList("*")); // Set allowed origins
                    configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS")); // Set allowed methods
                    configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type", "Accept")); // Set allowed headers
                    return configuration;
                }))
                .authorizeRequests(requests -> requests
                        .requestMatchers(Whitelist).permitAll() // Permit access to Whitelist URLs without authentication
                        .anyRequest().authenticated()) // Authenticate all other requests
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Set session creation policy to STATELESS
                .authenticationProvider(authenticationProvider) // Set authentication provider
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // Add JwtAuthenticationFilter before UsernamePasswordAuthenticationFilter

        return http.build();
    }
}
