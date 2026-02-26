package com.cmed.app.repositories.files;

import com.cmed.app.models.files.PreviousRecordFile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PreviousRecordFileRepository extends BaseFileRepository<PreviousRecordFile> {

    @Query("SELECT prf FROM PreviousRecordFile prf WHERE prf.previousRecord.id = :previousRecordId")
    List<PreviousRecordFile> findByPreviousRecordId(UUID previousRecordId);
}
