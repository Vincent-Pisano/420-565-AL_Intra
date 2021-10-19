package com.renaud.intra.controller;

import com.renaud.intra.model.Person;
import com.renaud.intra.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3007")
public class Controller {

    private final PersonService service;

    public Controller(PersonService service) {
        this.service = service;
    }

    @GetMapping("/getAll/persons")
    public ResponseEntity<List<Person>> getAllPersons() {
        return service.getAllPersons()
                .map(_persons -> ResponseEntity.status(HttpStatus.ACCEPTED).body(_persons))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

}
