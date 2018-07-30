package za.co.absa.idea.Idea;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
public class IdeaController {

    @Autowired
    private IdeaRepository ideaRepository;

    @GetMapping("/ideas")
    public List<Idea> retrieveAllIdeas() {
        return ideaRepository.findAll();
    }

    @GetMapping("/ideas/{id}")
    public Idea retrieveIdea(@PathVariable long id) {
        Optional<Idea> idea = ideaRepository.findById(id);

        if (!idea.isPresent()) {
            throw new IdeaNotFoundException("id-" + id);
        }

        return idea.get();
    }

    @PostMapping("/ideas")
    public ResponseEntity<Object> createIdea(@RequestBody Idea idea) {
        Idea savedIdea = ideaRepository.save(idea);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(savedIdea.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @PutMapping("/ideas/{id}")
    public ResponseEntity<Object> updateIdea(@RequestBody Idea idea, @PathVariable long id) {
        Optional<Idea> ideaOptional = ideaRepository.findById(id);

        if (!ideaOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        idea.setId(id);
        ideaRepository.save(idea);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/ideas/{id}")
    public void deleteIdea(@PathVariable long id) {
        ideaRepository.deleteById(id);
    }
}
