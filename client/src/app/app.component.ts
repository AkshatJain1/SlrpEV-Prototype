import { Component, OnInit } from '@angular/core';
import { WebService } from './web.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private web: WebService) {}

  ngOnInit(): void {
    
  }

}
