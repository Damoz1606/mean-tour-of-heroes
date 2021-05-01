import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Hero } from '../../interfaces/heroes';
import { HeroService } from "../../service/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    let id;
    this.activatedRoute.params.subscribe(res => {
      id = res['id'];
    });
    this.heroService.getHero(id)
    .subscribe(res => {
      this.hero = res
    });
  }

  goBack(): void {
    this.location.back();
  }

}
