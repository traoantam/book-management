import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceMock {
  constructor() { }

    login(data) {
        if(data.email === "traoantam@gmail.com" && data.password === "12345678")
        return {
            "data": {
                "id": 49,
                "email": "traoantam@gmail.com",
                "provider": "email",
                "uid": "traoantam@gmail.com",
                "name": null,
                "nickname": null,
                "image": null,
                "first_name": "Tam",
                "last_name": "Trao An"
            }
        };
    }

    register(data) {
        if(data.email !== "" && data.password !== "")
            return {
                "status": "success",
                "data": {
                    "id": 49,
                    "email": "traoantam@gmail.com",
                    "provider": "email",
                    "uid": "traoantam@gmail.com",
                    "name": null,
                    "nickname": null,
                    "image": null,
                    "first_name": "Tam",
                    "last_name": "Trao An"
                }
            };
    }

    checkValidateToken() {
        if(!localStorage.getItem('token') && !localStorage.getItem('uid') && !localStorage.getItem('client'))
            return false;
        return true;
    }

    isLoggedIn() {
        return !this.checkValidateToken() ? false:true;   
    }

    currentUser() {
        return localStorage.getItem('uid');
    }
}