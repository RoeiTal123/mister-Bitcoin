import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError, from, tap, retry, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { storageService } from './async-storage.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService{

    constructor(private http: HttpClient) {}

    public getRate(coins : number) {
        return this.http.get<string>(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    }

    public getMarketPrice() {

        return this.http.get<{ values : [{x:string,y:string}] }>(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
            .pipe(
                // tap(res.values => console.log(res.values))
                map(res => {
                    res.values
                }),
                // retry(1),
                // catchError((err: HttpErrorResponse) => {
                //     console.log('couldnt fetch data because of :',err)
                //     return throwError(() => err)
                // })
            )
    }

}