package com.renaud.intra.service;

import com.renaud.intra.model.Person;
import com.renaud.intra.repository.PersonRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    public  PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Optional<List<Person>> getAllPersons() {
        List<Person> personList = personRepository.findAll();
        return personList.isEmpty() ? Optional.empty() : Optional.of(personList);
    }

}
