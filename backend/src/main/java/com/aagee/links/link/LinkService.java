package com.aagee.links.link;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class LinkService {

	private static List<Link> links = new ArrayList<>();
	private static long idCounter = 0;

	static {
		links.add(new Link(++idCounter, "Artur Gajewski @ Github", "https://github.com/artur-gajewski"));
		links.add(new Link(++idCounter, "Artur Gajewski @ Flickr", "https://www.flickr.com/photos/arturgajewski/"));
		links.add(new Link(++idCounter, "Spring Framework", "https://spring.io/"));
		links.add(
				new Link(++idCounter, "Java EE", "https://www.oracle.com/technetwork/java/javaee/overview/index.html"));
	}

	public List<Link> findAll() {
		return links;
	}

	public Link save(Link link) {
		if (link.getId() == -1 || link.getId() == 0) {
			link.setId(++idCounter);
			links.add(link);
		} else {
			deleteById(link.getId());
			links.add(link);
		}
		return link;
	}

	public Link deleteById(long id) {
		Link link = findById(id);

		if (link != null) {
			if (links.remove(link)) {
				return link;
			}
		}

		return null;
	}

	public Link findById(long id) {
		for (Link link : links) {
			if (link.getId() == id) {
				return link;
			}
		}

		return null;
	}
}