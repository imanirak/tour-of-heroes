import { Component } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
 hero: Hero = {
  id: 1, name: 'Windstorm',
 };

}


// ng generate created three metadata properties:

// PROPERTIES	DETAILS
// selector	The component's CSS element selector.
// templateUrl	The location of the component's template file.
// styleUrls	The location of the component's private CSS styles.