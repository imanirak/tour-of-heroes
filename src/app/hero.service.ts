import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// This is an example of a typical 
// service-in-service scenario in which you inject 
// the MessageService into the HeroService which is 
// injected into the HeroesComponent.

export class HeroService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }
    private heroesUrl = 'api/heroes';  // URL to web api
    
  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    // this.messageService.add('HeroService: fetched heroes');
    // update to retrieve data from http 
  return this.http.get<Hero[]>(this.heroesUrl)
}

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  /** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`HeroService: ${message}`);
}

}
