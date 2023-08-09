import { Injectable } from '@angular/core';
import {Observable , of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

// This is an example of a typical 
// service-in-service scenario in which you inject 
// the MessageService into the HeroService which is 
// injected into the HeroesComponent.

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero []> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
