package de.chris.twisabackend.repositories;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;

import de.chris.twisabackend.models.Tweet;


@Transactional
public interface TweetRepository extends CrudRepository<Tweet, Integer>  {

}