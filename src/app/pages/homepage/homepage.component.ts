import { Component , inject , OnInit , OnDestroy} from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit, OnDestroy{

  bitcoinService = inject(BitcoinService)
  userService = inject(UserService)

  username : any = this.userService.getUser()
  // btcRate : any = this.bitcoinService.getRate(this.username.coins)
  btcRate$! : Observable<string> 
  marketPrices$! : Observable<string> 

  ngOnInit(): void {
    this.btcRate$=this.bitcoinService.getRate(this.username.coins)
    
    const data=this.bitcoinService.getMarketPrice().subscribe()
    // console.log('data ',data)
  }

  ngOnDestroy(): void {
    
  }
  
}
