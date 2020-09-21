import { Component, OnInit } from '@angular/core';
import { HomeService } from "../services/home.service";
//import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  details:{
    topMovies:'s',topShows,onAirTv
  };

  topmovies = []
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.getDetails().subscribe((data)=>{
      console.log(this.topmovies);
      for(let i = 0 ; i<3; i++) {
        this.topmovies.push(data.topMovies[i]);
      }
      console.log(this.topmovies)
    })
  }

}
