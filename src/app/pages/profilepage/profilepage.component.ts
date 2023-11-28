import { Component , OnDestroy , OnInit, inject, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Observable , map} from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss'
})
export class ProfilepageComponent implements OnInit, OnDestroy{

  userService = inject(UserService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  loggedInUser: User | null = null
  user$!: Observable<Contact> | null

  correctPath : boolean = true;

  @ViewChild('elTransfer') elTransfer!: ElementRef<HTMLInputElement>

  currentMoves : Object[] = []

  async ngOnInit(): Promise<void> {
    if (this.router.url!=='/profile'){
      this.correctPath=false
    } else {
      this.correctPath=true
    }
    this.loggedInUser = this.userService.loggedInUser
    this.user$ = this.route.data.pipe(map(data => data['user']))
    // this.currentMoves=this.loggedInUser.moves.stringify
    this.loggedInUser.moves.map((move)=>this.currentMoves.push(move))
    // console.log(this.user$)
  }

  onTransfer(){
    const transferValue=this.elTransfer.nativeElement.value
    if(transferValue===''||parseInt(transferValue)===0||isNaN(parseInt(transferValue))||(parseInt(transferValue)>=this.loggedInUser!.coins)){
      console.log('please enter a valid value')
    } else {
      this.userService.makeTransaction(parseInt(transferValue),'bready')
    }
    console.log(transferValue)
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
