package com.cmed.app.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
@Data
public class PreviousRecordNotFoundException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Previous Record not found";
    private static final String DEFAULT_ERROR_CODE = "PREVIOUS_RECORD_NOT_FOUND";
    private static final HttpStatus DEFAULT_STATUS = HttpStatus.NOT_FOUND;

    private final HttpStatus status;
    private final String errorCode;

    public PreviousRecordNotFoundException() {
        super(DEFAULT_MESSAGE);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }

    public PreviousRecordNotFoundException(String message) {
        super(message);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }
}
