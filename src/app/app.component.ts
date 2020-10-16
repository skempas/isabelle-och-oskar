import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    trigger('slideInOut', [
      state('in', style({
        width: '70vw',
        transform: 'translate3d(0,0,0)',
      })),
      state('out', style({
        transform: 'translate3d(-105%, 0, 0)',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
    
})
export class AppComponent {
  title = 'isabelle-och-oskar';
  menuState: string = 'out';

  toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    document.body.style.overflow = this.menuState === 'in' ?  'hidden' : 'auto';
  }
}
