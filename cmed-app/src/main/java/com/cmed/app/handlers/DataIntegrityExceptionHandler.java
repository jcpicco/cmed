package com.cmed.app.handlers;

import com.cmed.app.exceptions.DuplicateKeyException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class DataIntegrityExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(DataIntegrityExceptionHandler.class);

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<Map<String, String>> handleDataIntegrityViolation(DataIntegrityViolationException ex) {
        String message = ex.getMostSpecificCause().getMessage();
        String field = null;

        // Log the full error for debugging
        logger.error("DataIntegrityViolationException occurred: {}", message, ex);

        // Extract field name from known constraints
        if (message.contains("uka370hmxgv0l5c9panryr1ji7d")) {
            field = "email";
        } else if (message.contains("uk_patients_dni")) {
            field = "dni";
        } else if (message.contains("uk_") || message.contains("unique")) {
            // Try to extract constraint name from error message
            int ukIndex = message.indexOf("uk_");
            if (ukIndex != -1) {
                int endIndex = message.indexOf("\"", ukIndex);
                if (endIndex == -1)
                    endIndex = message.indexOf(" ", ukIndex);
                if (endIndex != -1) {
                    String constraintName = message.substring(ukIndex, endIndex);
                    field = constraintName.replace("uk_", "").replace("_", " ");
                }
            }
        }

        Map<String, String> response = new HashMap<>();
        if (field != null) {
            response.put("message", "Duplicate value for " + field);
            response.put("error", "The " + field + " is already in use");
        } else {
            response.put("message", "Data integrity violation");
            response.put("error", "A database constraint was violated. Please check your input.");
            response.put("details", message); // Include full error for debugging
        }

        return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
    }
}
