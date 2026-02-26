package com.cmed.app.handlers;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(HttpMessageNotReadableException.class)
    public ResponseEntity<Map<String, String>> handleHttpMessageNotReadableException(
            HttpMessageNotReadableException ex) {

        Map<String, String> errorResponse = new HashMap<>();

        // Check if it's a JSON parse error
        if (ex.getCause() instanceof JsonParseException) {
            errorResponse.put("message", "Malformed JSON request");
            errorResponse.put("error", "Invalid JSON format");
        } else if (ex.getCause() instanceof JsonMappingException) {
            errorResponse.put("message", "Unable to map JSON to object");
            errorResponse.put("error", "JSON mapping error");
        } else {
            errorResponse.put("message", "Request body is not readable");
            errorResponse.put("error", "Invalid request body");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<Map<String, Object>> handleTypeMismatch(MethodArgumentTypeMismatchException ex) {
        Map<String, Object> responseBody = new HashMap<>();
        String parameterName = ex.getName();
        String requiredType = ex.getRequiredType() != null ? ex.getRequiredType().getSimpleName() : "unknown";
        String actualValue = ex.getValue() != null ? ex.getValue().toString() : "null";
        String actualType = ex.getValue() != null ? ex.getValue().getClass().getSimpleName() : "null";

        responseBody.put("message", "Type mismatch for parameter '" + parameterName + "'");
        responseBody.put("error", String.format(
                "Expected type '%s' but found value '%s' of type '%s'",
                requiredType, actualValue, actualType
        ));

        return new ResponseEntity<>(responseBody, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> fieldErrors = ex.getBindingResult().getFieldErrors()
                .stream()
                .collect(Collectors.toMap(
                        FieldError::getField,
                        FieldError::getDefaultMessage,
                        (existing, replacement) -> existing
                ));

        Map<String, Object> responseBody = new HashMap<>();
        responseBody.put("message", "Field validation errors found");
        responseBody.put("errors", fieldErrors);

        return new ResponseEntity<>(responseBody, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, String>> handleGeneralException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(Map.of(
                        "message", "Internal server error",
                        "error", ex.getMessage()
                ));
    }
}
