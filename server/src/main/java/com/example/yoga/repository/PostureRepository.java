package com.example.yoga.repository;

import com.example.yoga.model.Posture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostureRepository extends JpaRepository<Posture, Long> {

}