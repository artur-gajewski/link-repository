package com.aagee.links.link;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class LinkResource {

	@Autowired
	private LinkRepository linkRepository;

	@GetMapping("/links")
	public List<Link> getAllLinks() {
		return linkRepository.findAll();
	}

	@GetMapping("/links/{id}")
	public Optional<Link> getLink(@PathVariable long id) {
		return linkRepository.findById(id);
	}

	@DeleteMapping("/links/{id}")
	public ResponseEntity<Void> deleteLink(@PathVariable long id) {
		linkRepository.deleteById(id);

		return ResponseEntity.noContent().build();
	}

	@PutMapping("/links/{id}")
	public ResponseEntity<Link> updateLink(@PathVariable long id, @RequestBody Link link) {
		Link linkUpdated = linkRepository.save(link);

		return new ResponseEntity<Link>(linkUpdated, HttpStatus.OK);
	}

	@PostMapping("/links")
	public ResponseEntity<Link> createLink(@RequestBody Link link) {
		Link createdLink = linkRepository.save(link);

		return new ResponseEntity<Link>(createdLink, HttpStatus.OK);
	}

}