package com.cmed.app.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
@Data
public class DiagnoseNotFoundException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Diagnose not found";
    private static final String DEFAULT_ERROR_CODE = "DIAGNOSE_NOT_FOUND";
    private static final HttpStatus DEFAULT_STATUS = HttpStatus.NOT_FOUND;

    private final HttpStatus status;
    private final String errorCode;

    public DiagnoseNotFoundException() {
        super(DEFAULT_MESSAGE);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }

    public DiagnoseNotFoundException(String message) {
        super(message);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }
}
