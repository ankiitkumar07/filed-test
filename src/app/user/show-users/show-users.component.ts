import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { State } from '../store/reducer/user.reducer';
import { selectUsers } from '../store/selector/user.selectors';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {

  users$: Observable<User[]>
  
  constructor(
    private store: Store<State>,
    private router: Router
  ) { 
    this.users$ = this.store.pipe(select(selectUsers))
  }

  ngOnInit(): void {
    
  }

  navigateToAddUser(){
    this.router.navigate(['add-user'])
  }

}
