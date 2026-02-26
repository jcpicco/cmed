package com.cmed.app.enums;

import lombok.Getter;

@Getter
public enum FileableType {
    MEDICAL_RECORDS("medical_records"),
    PREVIOUS_RECORDS("previous_records");

    private final String value;

    FileableType(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}