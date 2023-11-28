import { Component , inject , OnInit , OnDestroy} from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit, OnDestroy{

  bitcoinService = inject(BitcoinService)
  userService = inject(UserService)

  user : any = this.userService.getUser()
  // btcRate : any = this.bitcoinService.getRate(this.user.coins)
  btcRate$! : Observable<string> 
  marketPrices$! : Observable<string> 
  moves : Transaction[] = [...this.user.moves]

  ngOnInit(): void {
    this.btcRate$=this.bitcoinService.getRate(this.user.coins)
    
    const data=this.bitcoinService.getMarketPrice().subscribe()

    if(this.moves.length>3){
      this.moves=this.moves.slice(this.moves.length-3,this.moves.length)
    }
    // console.log('this.moves ',this.moves)
  }

  getMoveKeys(move: any): number[] {
    // Use Object.keys() to get the keys of the move object
    var values : any[]=[]
    values=[Object.values(move)[1],Object.values(move)[3]]
    if (values[0]===1) {
      values[0] += ' coin'
    }  else {
      values[0] += ' coins'
    }
    values[1]=new Date(values[1])
    return values;
  }

  ngOnDestroy(): void {
    
  }
  
}
