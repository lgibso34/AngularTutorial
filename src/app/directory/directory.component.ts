import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service'



@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  ninjas = [];

  constructor(private logger: LoggingService, private dataService: DataService) { }

  logIt(){
    this.logger.log();
  }

  showData(){
    this.dataService.fetchData()
    .subscribe(
      (data: any) => { this.ninjas = data}
    );
  }

  ngOnInit() {
    this.showData();
  }

}
