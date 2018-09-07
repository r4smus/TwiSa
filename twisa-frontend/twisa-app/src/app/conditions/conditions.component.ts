import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../data/form-data.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor(private formDataService: FormDataService) { }

  ngOnInit() {
    console.log(this.formDataService.getSelectAttributes());
  }

}
