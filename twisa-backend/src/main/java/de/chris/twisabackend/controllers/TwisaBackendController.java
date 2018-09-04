package de.chris.twisabackend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.common.collect.Lists;

import de.chris.twisabackend.models.Tweet;
import de.chris.twisabackend.repositories.TweetRepository;


@RestController
@RequestMapping("/twisa-api")
@CrossOrigin("*")
public class TwisaBackendController {
	
    
    @Autowired
    TweetRepository tweetRepository;
    
    

    @GetMapping("/tweets")
    public Iterable<Tweet> getAllTweets() {
        return tweetRepository.findAll();
    }

    @GetMapping(value="/tweets/{id}")
    public ResponseEntity<Tweet> getTweetById(@PathVariable("id") Integer id) {
        Tweet tweet = tweetRepository.findOne(id);
        if(tweet == null) {
            return new ResponseEntity<Tweet>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<Tweet>(tweet, HttpStatus.OK);
        }
    }
    
    @GetMapping(value="/tweets/{lang}")
    public Iterable<Tweet> getTweetsByLang(@PathVariable("lang") String lang) {
        Iterable<Tweet> tweets = tweetRepository.findAll();
        
        ArrayList<Tweet> tweetsArrList = Lists.newArrayList(tweets);
        
        for (Tweet tweet : tweetsArrList) {
			if(tweet.getLang() != lang) {
				tweetsArrList.remove(tweet);
			}
		}
        return tweetsArrList;
    }
}