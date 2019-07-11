import { OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserEntity } from './entities/user.entity';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My Library';
}
