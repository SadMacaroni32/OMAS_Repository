package com.omasystem.omas.Security; 

import java.io.IOException; 

import org.springframework.lang.NonNull; 
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; 
import org.springframework.security.core.context.SecurityContextHolder; 
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource; 
import org.springframework.stereotype.Component; 
import org.springframework.web.filter.OncePerRequestFilter; 
import com.omasystem.omas.Service.JwtService; 

import jakarta.servlet.FilterChain; 
import jakarta.servlet.ServletException; 
import jakarta.servlet.http.HttpServletRequest; 
import jakarta.servlet.http.HttpServletResponse; 
import lombok.RequiredArgsConstructor; 

@Component 
@RequiredArgsConstructor 
public class JwtAuthenticationFilter extends OncePerRequestFilter { // Declaration of JwtAuthenticationFilter class, extending OncePerRequestFilter

    private final JwtService jwtservice; // Declaring a final field for JwtService injection
    private final UserDetailsService userDetailsService; // Declaring a final field for UserDetailsService injection

    @Override
    protected void doFilterInternal(
        @NonNull HttpServletRequest request, 
        @NonNull HttpServletResponse response, 
        @NonNull FilterChain filterChain 
        ) throws ServletException, IOException { // Method throws ServletException and IOException
        final String authHeader = request.getHeader("Authorization"); // Retrieving the Authorization header from the request
        final String jwt;
        final String username;
        if (authHeader == null || !authHeader.startsWith("Bearer ")){ // Checking if the Authorization header is null or does not start with "Bearer "
            filterChain.doFilter(request, response); // Passing the request and response to the next filter in the chain
            return;
        }
        jwt = authHeader.substring(7); // Extracting the JWT token from the Authorization header
        username = jwtservice.extractUsername(jwt); // Extracting the username from the JWT token
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) { // Checking if the username is not null and no authentication is currently present in the SecurityContext
            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username); // Loading user details by username
            if (jwtservice.isTokenValid(jwt, userDetails)) { // Checking if the JWT token is valid
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken( // Creating an authentication token
                    userDetails, 
                    null,
                    userDetails.getAuthorities()
                );

                authToken.setDetails( // Setting details for the authentication token
                    new WebAuthenticationDetailsSource().buildDetails(request)
                );
                SecurityContextHolder.getContext().setAuthentication(authToken); // Setting the authentication token in the SecurityContext
            }
        }
        filterChain.doFilter(request, response); // Passing the request and response to the next filter in the chain
    }

}
