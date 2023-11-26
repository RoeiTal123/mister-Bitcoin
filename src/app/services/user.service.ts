import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, from, tap, retry, catchError } from 'rxjs';
import { storageService } from './async-storage.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService{

    user = {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
    }

    getUser(){
        return this.user
    }
}