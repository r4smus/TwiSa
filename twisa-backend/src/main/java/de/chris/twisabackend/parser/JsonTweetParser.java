package de.chris.twisabackend.parser;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class JsonTweetParser {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		
//		String s = "Edit the Expression & Text to see ma\"in_reply_to_status_id_str\":null,tches. Roll over matches \"in_reply_to_status_id_str\":\"1017643288734470145\", tr";
//		
		String pattern1 = "\"id_str\":\"[\\w\\d\\s:+]*\",";
		String pattern2 = "\"truncated\":(true|false),";
		String pattern3 = "\"in_reply_to_status_id\":(null|\\d+),";
		String pattern4 = "\"in_reply_to_status_id_str\":(null|(\"\\d+\")),";
		String pattern5 = "\"in_reply_to_user_id\":(null|\\d+),";
		String pattern6 = "\"in_reply_to_screen_name\":(null|\"\\w+\"),";
		String pattern7 = "\"screen_name\":(null|\"\\w+\"),";
		String pattern8 = "\"in_reply_to_user_id_str\":(null|(\"\\d+\")),";
		String pattern9 = "\"url\":(null|\".+\"),";
		
		
//		
//		System.out.println(s);
//		
//		s = s.replaceAll(pattern, "");
//		
//		System.out.println(s);
		
//		System.out.println(System.getProperty("user.dir"));
		
		// Open the file
		FileInputStream fstream = new FileInputStream("src\\main\\java\\de\\chris\\twisabackend\\parser\\tweets_12.07.18_100_tweets.txt");
		BufferedReader br = new BufferedReader(new InputStreamReader(fstream));
		FileOutputStream foutputStream = new FileOutputStream("src\\main\\java\\de\\chris\\twisabackend\\parser\\tweets_parsed.json");

		String strLine;
		
	 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(foutputStream));
	 
	 
		bw.write("[");
		bw.newLine();

		//Read File Line By Line
		while ((strLine = br.readLine()) != null)   {
		  // Print the content on the console
		  strLine = strLine.replaceAll(pattern1, "");
		  strLine = strLine.replaceAll(pattern2, "");
		  strLine = strLine.replaceAll(pattern3, "");
		  strLine = strLine.replaceAll(pattern4, "");
		  strLine = strLine.replaceAll(pattern5, "");
		  strLine = strLine.replaceAll(pattern6, "");
		  strLine = strLine.replaceAll(pattern7, "");
		  strLine = strLine.replaceAll(pattern8, "");
		  strLine = strLine.replaceAll(pattern9, "");
		  
		  
		  System.out.println (strLine);
		  bw.write(strLine +",");
		  bw.newLine();
		  
		  
		}
		
		bw.write("]");
		

		//Close the input stream
		br.close();
		bw.close();

	}

}
