import { Component , OnDestroy , OnInit, inject, Input, Output, EventEmitter} from '@angular/core';
import { Observable , map} from 'rxjs';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrl: './profilepage.component.scss'
})
export class ProfilepageComponent implements OnInit, OnDestroy{

  userService = inject(UserService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  user: User | null = null
  user$!: Observable<User>

  async ngOnInit(): Promise<void> {
    this.user$ = this.userService.loggedInUser
    this.user$ = this.route.data.pipe(map(data => data['user']))
    console.log(this.user$)
  }

  ngOnDestroy(): void {
    
  }

}
