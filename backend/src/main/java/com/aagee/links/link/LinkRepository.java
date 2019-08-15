package com.aagee.links.link;

import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface LinkRepository extends CrudRepository<Link, Long> {

	Optional<Link> findById(Long id);

	List<Link> findAll();

}