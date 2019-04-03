import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-example-three',
  templateUrl: './basics-example-three.component.html',
  // styleUrls: ['./basics-example-three.component.css'],
  styles: [`
  .itemThreshhold {
      color: white
  }
  `]
})
export class BasicsExampleThreeComponent implements OnInit {

  displayDetails = false;
  eventLog = [];

  constructor(){}

  ngOnInit() {
  }

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.eventLog.push( this.eventLog.length + 1);
  }

  getColor(n) {
    return this.isThresholdMet(n) ? 'blue' : 'none';
  }
  
  isThresholdMet(n){ return n > 4 }
  

}
