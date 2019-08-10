package com.aagee.links.link;

public class Link {
	private Long id;
	private String description;

	public Link() {
	}

	public Link(long id, String description) {
		super();
		this.id = id;
		this.description = description;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}