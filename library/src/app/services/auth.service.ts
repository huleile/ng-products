import { LocalStorage } from './storage.service';
import { UserEntity } from './../entities/user.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor(private localStorage: LocalStorage) {}

    login(user: UserEntity) {
        this.localStorage.setObject(`user`, user);
    }

    logout() {
        this.localStorage.remove(`user`);
    }
}
