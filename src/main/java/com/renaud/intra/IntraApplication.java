package com.renaud.intra;

import com.renaud.intra.model.Person;
import com.renaud.intra.repository.PersonRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class IntraApplication implements CommandLineRunner {

    private final PersonRepository personRepository;

    public IntraApplication(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(IntraApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        personRepository.deleteAll();

        Person person1 = new Person();
        person1.setName("Jeanne");

        Person person2 = new Person();
        person2.setName("Luc");
        personRepository.saveAll(Arrays.asList(person1, person2));
    }
}
