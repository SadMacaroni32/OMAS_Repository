package com.omasystem.omas.Exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message); // Constructor for UserNotFoundException with a custom message
    }
}
