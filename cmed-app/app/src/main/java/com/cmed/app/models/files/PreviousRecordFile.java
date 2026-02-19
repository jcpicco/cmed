package com.cmed.app.models.files;

import com.cmed.app.models.PreviousRecord;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@DiscriminatorValue("PREVIOUS_RECORD")
public class PreviousRecordFile extends BaseFile {
    @ManyToOne
    @JoinColumn(name = "previous_record_id", updatable = false)
    private PreviousRecord previousRecord;
}

