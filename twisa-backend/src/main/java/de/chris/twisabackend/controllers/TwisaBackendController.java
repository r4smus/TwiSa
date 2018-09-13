package de.chris.twisabackend.controllers;

import java.util.ArrayList;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.common.collect.Lists;

import de.chris.twisabackend.models.Tweet;
import de.chris.twisabackend.models.User;
import de.chris.twisabackend.repositories.TweetRepository;
import de.chris.twisabackend.repositories.UserRepository;


@RestController
@RequestMapping("/twisa-api")
@CrossOrigin("*")
public class TwisaBackendController {
	
    
    @Autowired
    TweetRepository tweetRepository;
    
    @Autowired
    UserRepository userRepository;
    
    private static final boolean INIT_TEST_DATA = false;
    
    @PostConstruct
	public void  setup() {
    	if(INIT_TEST_DATA) {
    		initTestData1();
    	}
	}
    
    

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
    
    private void initTestData1() {
    	User user1 = new User(1,"Max Mustermann",123,"http://pbs.twimg.com/profile_images/1009276895416877056/RBFyvqp8_normal.jpg");
    	User user2 = new User(2,"Maria Gonzales",9999,"http://pbs.twimg.com/profile_images/1009976350961266688/R0g8bJji_normal.jpg");
    	User user3 = new User(3,"Daniel Baier",7215,"http://pbs.twimg.com/profile_images/958440068569419776/ullmyXUd_normal.jpg");
    	User user4 = new User(4,"Lisa Meier",3254,"http://pbs.twimg.com/profile_images/1017291034051731457/riO2qkuy_normal.jpg");
    	User user5 = new User(5,"Hans Wagner", 1457,"http://pbs.twimg.com/profile_images/3234884062/268199d94c0d801bc48b7b7ac1dbdd3f_normal.jpeg");
    	
    	
    	Tweet tweet1 = new Tweet(1, "RT @dulce_marquezz: Holaaa #TorreÃ³n https://t.co/dZseWPe4BL", "es", user2, 41.529356f, -2.545587f);
    	Tweet tweet2 = new Tweet(2, "Ãšltimamente he visto que cuando las kpopies hablan de sus favs obtienen 5 likes y 3 RT, pero cuando hablan de como las ARM\\u2026", "es", user2, 40.233630f, -1.754572f);
    	Tweet tweet3 = new Tweet(3, "RT @caetlyynn: stop moving. im tryna see something https://t.co/x7hcIQPo8d","en",user1,53.211747f,-2.321273f );
    	Tweet tweet4 = new Tweet(4, "I wish Tenma-kun would stop running when he sees me...","en",user1, 51.535115f,-0.152035f );
    	Tweet tweet5 = new Tweet(5, "Wir beantworten die wichtigsten Fragen zum Thema Pflegezusatzversicherung. https://t.co/Dv5mkLRzrj","de",user3,50.860532f, 7.039078f);
    	Tweet tweet6 = new Tweet(6, "todo bien con el lenguaje inclusivo y los que lo usan, pero personalmente me parece re detestable", "es", user2, 41.516407f,2.205094f);
    	Tweet tweet7 = new Tweet(7, "Super FCA! Weiter so!!!","de",user4, 48.403275f, 10.845050f);
    	Tweet tweet8 = new Tweet(8, "Tooooooooooor, perfekter Schuss von Gregoritsch. #FCA","de",user5, 48.291469f, 10.658969f);
    	Tweet tweet9 = new Tweet(9, "Heut gibts Zwetschgendatschi #Lecker","de",user4, 48.434264f, 10.714587f);
    	Tweet tweet10 = new Tweet(10, "Ich geh mal schlafen. #müde","de",user5, 48.357670f, 10.783938f);
    	
    	tweetRepository.save(tweet1);
    	tweetRepository.save(tweet2);
    	tweetRepository.save(tweet3);
    	tweetRepository.save(tweet4);
    	tweetRepository.save(tweet5);
    	tweetRepository.save(tweet6);
    	tweetRepository.save(tweet7);
    	tweetRepository.save(tweet8);
    	tweetRepository.save(tweet9);
    	tweetRepository.save(tweet10);
    }
}