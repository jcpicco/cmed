package com.cmed.app.handlers;

import com.cmed.app.exceptions.DiagnoseNotFoundException;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
@Order(1)
public class DiagnoseExceptionHandler {

    @ExceptionHandler(DiagnoseNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Map<String, String>> handleDiagnoseNotFound(DiagnoseNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of(
                        "message", "Diagnose not found",
                        "error", ex.getMessage()
                ));
    }
}
