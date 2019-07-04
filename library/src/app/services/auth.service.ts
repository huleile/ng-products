import { UserEntity } from './../entities/user.entity';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    user: UserEntity;
    constructor() {}

    login(user?: UserEntity) {
        this.user = user ? user : {
            name: 'hully',
            age: 26
        };
    }

    logout() {
        this.user = null;
    }

    getOUser() {
        return this.user;
    }
}
