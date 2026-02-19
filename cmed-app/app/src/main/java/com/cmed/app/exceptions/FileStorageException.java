package com.cmed.app.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
@Data
public class FileStorageException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Error processing file";
    private static final String DEFAULT_ERROR_CODE = "FILE_STORAGE_ERROR";
    private static final HttpStatus DEFAULT_STATUS = HttpStatus.INTERNAL_SERVER_ERROR;

    private final HttpStatus status;
    private final String errorCode;

    public FileStorageException() {
        super(DEFAULT_MESSAGE);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }

    public FileStorageException(String message) {
        super(message);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }

    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }
}
