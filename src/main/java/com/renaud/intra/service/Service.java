package com.renaud.intra.service;

import com.renaud.intra.model.Guess;
import com.renaud.intra.repository.GuessRepository;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class Service {

    private GuessRepository guessRepository;

    public Service(GuessRepository guessRepository) {
        this.guessRepository = guessRepository;
    }

    public Optional<Guess> saveGuess(Guess guess) {
        return Optional.of(guessRepository.save(guess));
    }

    public Optional<List<Guess>> getAllGuesses() {
        List<Guess> guesses = guessRepository.findAll();
        return guesses.isEmpty() ? Optional.empty() : Optional.of(guesses);
    }

}
