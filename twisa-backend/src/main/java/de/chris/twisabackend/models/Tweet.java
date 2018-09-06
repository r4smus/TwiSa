package de.chris.twisabackend.models;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(allowGetters = true)
@Entity
public class Tweet {
	
	@Id
    private int id;
	
	@NotNull
	private String text;
	
	@NotNull
	private String lang;
	
	@OneToOne(
	        cascade = CascadeType.ALL, 
	        orphanRemoval = true
	 )
	private User user;
	
	
	public Tweet() {
		
	}
	
	public Tweet(int id, String text, String lang, User user) {
		this.id = id;
		this.text = text;
		this.lang = lang;
		this.user = user;
	}

	public User getUser() {
		return user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}
	
}
