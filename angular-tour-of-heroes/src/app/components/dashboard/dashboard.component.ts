import { Component, OnInit } from '@angular/core';
import { Hero } from "../../interfaces/heroes";
import { HeroService } from "../../service/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(res => {
      this.heroes = res.slice(1, 5);
    }, err => {
      console.log(err);
    });
  }

}
