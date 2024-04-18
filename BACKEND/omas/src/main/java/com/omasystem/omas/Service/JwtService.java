package com.omasystem.omas.Service; 

import java.security.Key; 
import java.time.Instant; 
import java.time.temporal.ChronoUnit; 
import java.util.Date; 
import java.util.HashMap; 
import java.util.Map; 
import java.util.function.Function; 

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service; 

import io.jsonwebtoken.Claims; 
import io.jsonwebtoken.Jwts; 
import io.jsonwebtoken.SignatureAlgorithm; 
import io.jsonwebtoken.io.Decoders; 
import io.jsonwebtoken.security.Keys; 

@Service 
public class JwtService {

        // Constant for secret key
        private static final String SECRET_KEY = "2DF99D8DD11121113A190E6A0C4BC0959E4A8F686C8A722F159D7B3FB0972EBCFB9AB27A94B1C79E0B833293B959AC2F82597E12F42659C852E73A1A4BB76F60F896193656475852EDC76B5A1A09434E41C491410E933F1E3710026401F6C98E77477B1CE680A9E9580BD5C75DA7845655BAE379E6E46D40E96E5884F8A34202";
    
        // Method to extract username from token
        public String extractUsername(String token) {
            // Extracting subject from claims
            return extractClaim(token, Claims::getSubject);
        }
    
        // Method to extract claim from token
        public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
            // Extracting all claims from token and applying the claimsResolver function
            final Claims claims = extractAllClaims(token);
            return claimsResolver.apply(claims);
        }
    
        // Method to generate token for UserDetails
        public String generateToken(UserDetails userDetails) {
            // Generating token with empty extra claims
            return generateToken(new HashMap<>(), userDetails);
        }
    
        // Method to generate token with extra claims for UserDetails
        public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
            // Generating token with subject as username, issued at current time, expiration time 1 hour from now, and signing with the signing key
            Instant now = Instant.now();
            Instant expirationTime = now.plus(1, ChronoUnit.HOURS);
    
            return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(Date.from(expirationTime))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();
        }
    
        // Method to check if token is valid for UserDetails
        public boolean isTokenValid(String token, UserDetails userDetails) {
            // Extracting username from token and checking if it matches UserDetails username and if token is not expired
            final String username = extractUsername(token);
            return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
        }
    
        // Method to check if token is expired
        private boolean isTokenExpired(String token) {
            // Extracting expiration date from token and checking if it's before current date
            return extractExpiration(token).before(new Date());
        }
    
        // Method to extract expiration date from token
        private Date extractExpiration(String token) {
            // Extracting expiration claim from token
            return extractClaim(token, Claims::getExpiration);
        }
    
        // Method to extract all claims from token
        private Claims extractAllClaims(String token) {
            // Parsing and returning all claims from token body
            return Jwts
            .parserBuilder()
            .setSigningKey(getSignInKey())
            .build()
            .parseClaimsJws(token)
            .getBody();
        }
    
        // Method to get signing key
        private Key getSignInKey() {
            // Decoding secret key, creating HMAC-SHA signing key and returning it
            byte[] KeyBytes = Decoders.BASE64.decode(SECRET_KEY);
            return Keys.hmacShaKeyFor(KeyBytes);
        }
    
    }
    


