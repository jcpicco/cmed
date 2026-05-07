package com.medcentermanager.app.repositories.files;

import com.medcentermanager.app.models.files.PreviousRecordFile;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface PreviousRecordFileRepository extends BaseFileRepository<PreviousRecordFile> {

    @Query("SELECT prf FROM PreviousRecordFile prf WHERE prf.previousRecord.id = :previousRecordId")
    List<PreviousRecordFile> findByPreviousRecordId(UUID previousRecordId);
}
