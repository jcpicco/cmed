package com.cmed.app.handlers;

import com.cmed.app.exceptions.FileStorageException;
import com.cmed.app.exceptions.MedicalRecordFileNotFoundException;
import com.cmed.app.exceptions.PreviousRecordFileNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

@ControllerAdvice
public class FileExceptionHandler {

    @ExceptionHandler(MedicalRecordFileNotFoundException.class)
    public ResponseEntity<String> handleMedicalRecordFileNotFound(MedicalRecordFileNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(PreviousRecordFileNotFoundException.class)
    public ResponseEntity<String> handlePreviousRecordFileNotFound(PreviousRecordFileNotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(FileStorageException.class)
    public ResponseEntity<String> handleFileStorageException(FileStorageException ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
    }

    @ExceptionHandler(MissingServletRequestPartException.class)
    public ResponseEntity<String> handleMissingFile(MissingServletRequestPartException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is required");
    }
}
