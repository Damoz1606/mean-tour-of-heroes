import { Injectable } from '@angular/core';
import { Hero } from "../interfaces/heroes";
import { HEROES } from "../mock/mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServices: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
  
  getHero(id: string): Observable<Hero>{
    const hero = HEROES.find(res => res.id === Number(id)) as Hero;
    this.messageServices.addMessage(`Hero found: ${hero.name}`);
    return of(hero);
  }
}
