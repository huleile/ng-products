import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../entities';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  title = 'library';
  logo = 'assets/rabbit.png';
  user: UserEntity;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getOUser();
  }
}
