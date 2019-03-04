package com.example.yoga.controller;

import com.example.yoga.exception.ResourceNotFoundException;
import com.example.yoga.model.Posture;
import com.example.yoga.repository.PostureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class PostureController {

    @Autowired
    PostureRepository postureRepository;

    @GetMapping("/postures")
    public List<Posture> getAllPostures() {
        return postureRepository.findAll();
    }

    @PostMapping("/postures")
    public Posture createPosture(@Valid @RequestBody Posture posture) {
        return postureRepository.save(posture);
    }

    @GetMapping("/postures/{id}")
    public Posture getPostureById(@PathVariable(value = "id") Long postureId) {
        return postureRepository.findById(postureId)
                .orElseThrow(() -> new ResourceNotFoundException("Posture", "id", postureId));
    }

    @PutMapping("/postures/{id}")
    public Posture updatePosture(@PathVariable(value = "id") Long postureId,
                                           @Valid @RequestBody Posture postureDetails) {

        Posture posture = postureRepository.findById(postureId)
                .orElseThrow(() -> new ResourceNotFoundException("Posture", "id", postureId));

        posture.setName(postureDetails.getName());
        posture.setDescription(postureDetails.getDescription());
        posture.setPicture(postureDetails.getPicture());

        Posture updatedPosture = postureRepository.save(posture);
        return updatedPosture;
    }

    @DeleteMapping("/postures/{id}")
    public ResponseEntity<?> deletePosture(@PathVariable(value = "id") Long postureId) {
        Posture posture = postureRepository.findById(postureId)
                .orElseThrow(() -> new ResourceNotFoundException("Posture", "id", postureId));

        postureRepository.delete(posture);

        return ResponseEntity.ok().build();
    }
}
