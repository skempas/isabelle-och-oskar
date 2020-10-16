import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  _trialEndsAt;
  _diff: number;
   _days: number;
   _hours: number;
   _minutes: number;
   _seconds: number;

  constructor() { }

  updateCountdown(){
    this._diff = this._trialEndsAt - new Date().getTime();
    this._days = this.getDays(this._diff);
    this._hours = this.getHours(this._diff);
    this._minutes = this.getMinutes(this._diff);
    this._seconds = this.getSeconds(this._diff);
  }

  ngOnInit(): void {
    this._trialEndsAt = 1628337600000;
    this.updateCountdown();
    interval(1000).subscribe(res => {
      this.updateCountdown();
    })
  }

  getDays(t){
    return Math.floor( t/(1000*60*60*24) );
}

getHours(t){
    return Math.floor( (t/(1000*60*60)) % 24 );
}

getMinutes(t){
    return Math.floor( (t/1000/60) % 60 );
}

getSeconds(t){
    return Math.floor( (t/1000) % 60 );
}


}
