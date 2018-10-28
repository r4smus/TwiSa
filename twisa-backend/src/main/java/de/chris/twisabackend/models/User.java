package de.chris.twisabackend.models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(allowGetters = true)
@Entity
public class User {
	
	@Id
    private int id;
	
	@NotNull
	private String name;
	
	@NotNull
	private int followers_count;
	
	@NotNull
	private int statuses_count;
	
	@NotNull
	private String created_at;
	
	private String description;
	
	@NotNull
	private String profile_image_url;
	
	public User() {
		
	}

	public User(int id, String name, int followers_count, int statuses_count, String created_at, String description, String profile_image_url) {
		this.id = id;
		this.name = name;
		this.followers_count = followers_count;
		this.statuses_count = statuses_count;
		this.created_at = created_at;
		this.description = description;
		this.profile_image_url = profile_image_url;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getFollowers_count() {
		return followers_count;
	}

	public void setFollowers_count(int followers_count) {
		this.followers_count = followers_count;
	}

	public String getProfile_image_url() {
		return profile_image_url;
	}

	public void setProfile_image_url(String profile_image_url) {
		this.profile_image_url = profile_image_url;
	}

	public int getStatuses_count() {
		return statuses_count;
	}

	public void setStatuses_count(int statuses_count) {
		this.statuses_count = statuses_count;
	}

	public String getCreated_at() {
		return created_at;
	}

	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
