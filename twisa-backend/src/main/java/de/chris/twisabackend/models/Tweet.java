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
	
	private float latitude;
	
	private float longitude;
	
	@NotNull
	private String source;
	
	
	public Tweet() {
		
	}
	
	public Tweet(int id, String text, String lang, User user, float latitude, float longitude, String source) {
		this.id = id;
		this.text = text;
		this.lang = lang;
		this.user = user;
		this.latitude = latitude;
		this.longitude = longitude;
		this.source = source;
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

	public float getLatitude() {
		return latitude;
	}

	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	public float getLongitude() {
		return longitude;
	}

	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}
	
	
	
}
