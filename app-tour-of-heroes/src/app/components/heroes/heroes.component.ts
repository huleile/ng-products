import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any = [];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
