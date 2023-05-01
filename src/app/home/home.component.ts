import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor (private services:ApiService){

  }

  topHeadingDisplay:any =[]

  ngOnInit(): void {
    this.services.topHeading().subscribe((result:any)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
      
    })
  }
}
