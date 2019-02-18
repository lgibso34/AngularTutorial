import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggingService } from '../logging.service'; // provided in app.module.ts. made in logging.service.ts


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = 'Welcome to the hompage...';
  // @Input() ninja; // from app.component
  // @Output() onYell = new EventEmitter();

  // twoWayninja = {
  //   name: 'Logan',
  //   belt: 'Black'
  // };
  // myString = 'I like chicken';
  // myBoolean = true;
  // alertMe(val){
  //   // alert('hey there');
  //   alert(val);
  // }
  // fireYellEvent(e){
  //   this.onYell.emit(e);
  //   console.log(e);
  // }



  constructor(private logger: LoggingService) { }

  logIt(){
    this.logger.log();
  }

  ngOnInit() {
  }

}
