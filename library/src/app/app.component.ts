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
}
