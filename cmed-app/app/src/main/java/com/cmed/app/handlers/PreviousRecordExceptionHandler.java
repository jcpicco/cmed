package com.cmed.app.handlers;

import com.cmed.app.exceptions.PreviousRecordNotFoundException;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
@Order(1)
public class PreviousRecordExceptionHandler {

    @ExceptionHandler(PreviousRecordNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Map<String, String>> handlePreviousRecordNotFound(PreviousRecordNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of(
                        "message", "Previous Record not found",
                        "error", ex.getMessage()
                ));
    }
}
