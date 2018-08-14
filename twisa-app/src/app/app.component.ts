import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    attributes: Array<Object> = [{id: 1, msg: 'Map'}, {id: 2, msg: 'Tweet-Text'}, {id: 3, msg: 'Source'}];
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
        // console.log($event);
        console.log($event.dragData.msg);
    }
}
