import { LocalStorage } from './../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../entities';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  title = 'library';
  logo = 'assets/rabbit.png';
  user: UserEntity;

  constructor(
    private localStorage: LocalStorage,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.localStorage.getObject<UserEntity>(`user`);
    if (!this.user) {
      this.router.navigateByUrl('login');
    }
  }
}
