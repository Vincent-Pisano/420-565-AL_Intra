package com.renaud.intra.controller;

import com.renaud.intra.model.Guess;
import com.renaud.intra.service.Service;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3007")
public class Controller {

    private Service service;

    public Controller(Service service) {
        this.service = service;
    }

    @PostMapping("/save/guess")
    public ResponseEntity<Guess> saveGuess(@RequestBody Guess guess) {
        return service.saveGuess(guess)
            .map(_guess -> ResponseEntity.status(HttpStatus.CREATED).body(_guess))
            .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/getAll/guesses")
    public ResponseEntity<List<Guess>> getAllGuesses() {
        return service.getAllGuesses()
                .map(_guesses -> ResponseEntity.status(HttpStatus.ACCEPTED).body(_guesses))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

}
