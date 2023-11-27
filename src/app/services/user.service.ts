import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  throwError,
  from,
  tap,
  retry,
  catchError,
} from 'rxjs';
import { storageService } from './async-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user : User = {
    name: 'Ochoa Hyde',
    coins: 100,
    moves: [],
    _id: 'bread',
  };

  public loggedInUser = this.user;

  getUser() {
    return this.user;
  }

  setLoggedInUser(user: any) {
    this._addUser(user);
  }

  public getLoggedInUser(): Observable<User> {
    return from(storageService.getUser<User>('LOGGED_IN_USER')).pipe(
      retry(1),
      catchError((err) => throwError(() => `logged in user not found!`))
    );
  }

  public makeTransaction(coinVal: number, name: string) {
    this.user.coins -= coinVal;
    var transaction: Transaction;
    transaction = {
      toUser: name,
      coinAmount: coinVal,
      byUser: this.user.name,
      transferredAt: Date.now(),
    };
    this.user.moves.push(transaction);
    console.log(transaction);
  }

  private _addUser(userToInsert: any) {
    return from(storageService.post('LOGGED_IN_USER', userToInsert)).pipe(
      tap((newUser) => {
        this.loggedInUser = userToInsert;
      }),
      retry(1),
      catchError(this._handleError)
    );
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err);
    return throwError(() => err);
  }
}
