package za.co.absa.demo.People;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class PeopleController {

    @Autowired
    private PersonRepository personRepository;

    //Get All People
    @GetMapping("/people")
    public List<Person> retrieveAllPeople() {
        return personRepository.findAll();
    }

    //Get Specific Person
    @GetMapping("/people/{id}")
    public Person retrievePerson(@PathVariable long id) {
        Optional<Person> person = personRepository.findById(id);

        if (!person.isPresent()) {
            throw new PersonNotFoundException("id-" + id);
        }

        return person.get();
    }

    //Update the person
    @PutMapping("/people/{id}")
    public ResponseEntity<Object> updatePerson(@RequestBody Person person, @PathVariable long id) {
        Optional<Person> ideaOptional = personRepository.findById(id);

        if (!ideaOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        person.setId(id);
        personRepository.save(person);
        return ResponseEntity.noContent().build();
    }

    //Add new Person

    @PostMapping("/people")
    public ResponseEntity<Object> createPerson(@RequestBody Person person) {
        Person savedPerson = personRepository.save(person);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedPerson.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    //Delete
    @DeleteMapping("/people/{id}")
    public void deletePerson(@PathVariable long id) {
        personRepository.deleteById(id);
    }

    //return the combined ages of all people
    @GetMapping("people/combinedAges")
    public long getCombinedAges()
    {
        long totalCombinedAge = 0;
        List<Person> people = personRepository.findAll();

        for (int cnt = 0; cnt < people.size(); cnt++) {

            Person person = people.get(cnt);
            totalCombinedAge = totalCombinedAge + person.getAge();
        }


        return totalCombinedAge;
    }

}
