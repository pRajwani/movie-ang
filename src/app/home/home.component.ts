import { Component, OnInit } from '@angular/core';
import { HomeService } from "../services/home.service";
//import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topmovies = [];
  topShows = [];
  onAirTv = []
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getDetails().subscribe((data)=>{
      for(let i = 0 ; i<5; i++) {
        this.topmovies.push(data.topMovies[i]);
        this.topShows.push(data.topShows[i]);
        this.onAirTv.push(data.onAirTv[i]);
      }
    })
  }

}
