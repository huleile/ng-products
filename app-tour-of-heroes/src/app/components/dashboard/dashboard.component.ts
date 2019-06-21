import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models';
import { HeroService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroesTop5: Hero[];
  constructor(
    private heroServer: HeroService
  ) { }

  ngOnInit() {
    this.heroServer.getHeros().subscribe((heroes: Hero[]) => this.heroesTop5 = heroes.slice(1, 6));
  }

}
