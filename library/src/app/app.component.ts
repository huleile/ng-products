import { AuthService } from './services/auth.service';
import { UserEntity } from './entities/user.entity';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'library';
  logo = 'assets/rabbit.png';
  user: UserEntity;
  showLogin = false;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user = this.auth.getOUser();
  }

  logout() {
    this.auth.logout();
  }
}
