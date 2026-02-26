package com.cmed.app.exceptions;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.http.HttpStatus;

@EqualsAndHashCode(callSuper = true)
@Data
public class NoteNotFoundException extends RuntimeException {
    private static final String DEFAULT_MESSAGE = "Note not found";
    private static final String DEFAULT_ERROR_CODE = "NOTE_NOT_FOUND";
    private static final HttpStatus DEFAULT_STATUS = HttpStatus.NOT_FOUND;

    private final HttpStatus status;
    private final String errorCode;

    public NoteNotFoundException() {
        super(DEFAULT_MESSAGE);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }

    public NoteNotFoundException(String message) {
        super(message);
        this.errorCode = DEFAULT_ERROR_CODE;
        this.status = DEFAULT_STATUS;
    }
}
