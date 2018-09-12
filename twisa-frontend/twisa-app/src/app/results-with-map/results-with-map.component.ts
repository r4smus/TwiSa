import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-with-map',
  templateUrl: './results-with-map.component.html',
  styleUrls: ['./results-with-map.component.css']
})
export class ResultsWithMapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
