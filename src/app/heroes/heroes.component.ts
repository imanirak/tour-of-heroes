import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;


  selectedHero?: Hero;
  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

}

// ng generate created three metadata properties:

// PROPERTIES	DETAILS
// selector	The component's CSS element selector.
// templateUrl	The location of the component's template file.
// styleUrls	The location of the component's private CSS styles.