package com.cmed.app.handlers;

import com.cmed.app.exceptions.FileStorageException;
import org.springframework.core.annotation.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
@Order(1)
public class FileStorageExceptionHandler {

    @ExceptionHandler(FileStorageException.class)
    @ResponseStatus
    public ResponseEntity<Map<String, String>> handleFileStorageException(FileStorageException ex) {
        return ResponseEntity
                .status(ex.getStatus())
                .body(Map.of(
                        "message", ex.getMessage(),
                        "errorCode", ex.getErrorCode()
                ));
    }
}
