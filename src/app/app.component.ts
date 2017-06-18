import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  pessoas: any[];
  
  constructor(private appService: AppService) {    
    this.pessoas = this.appService.getClientes();
  }
  
  ngOnInit() {
  }
}
