package com.cmed.app.enums;

import lombok.Getter;

@Getter
public enum FileCategory {
    IMAGE("image"),
    VIDEO("video"),
    DOCUMENT("document");

    private final String value;

    FileCategory(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return value;
    }
}