import { AuthService } from './../services/auth.service';
import { UserEntity } from './../entities/user.entity';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() logo: string;
  @Input() user: UserEntity;

  beLogin = true;

  @Output()
  showLogin: EventEmitter<boolean> = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(user?: UserEntity) {
    this.auth.login(user ? user : this.user);
  }
}
