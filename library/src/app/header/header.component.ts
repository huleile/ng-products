import { LocalStorage } from './../services/storage.service';
import { UserEntity } from './../entities/user.entity';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() logo: string;
  @Input() user: UserEntity;

  constructor(
    private storage: LocalStorage,
    private router: Router
  ) {}
  
  ngOnInit() {}

  public logout() {
    this.storage.remove(`user`);
    this.router.navigateByUrl(`login`);
  }
}
