import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user';
import { addUser } from '../store/action/user.actions';
import { State } from '../store/reducer/user.reducer';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup
  submitted: boolean
  user: User
  toastVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<State>) { }

  ngOnInit(): void {
    this.addUser = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      monthlyAdvertisingBudget: ['', Validators.required],
      countryCode: ['', Validators.pattern(/^(\+?\d{1,3}|\d{1,4})$/)],
      phoneNumber: ['', Validators.required]
    })
  }

  get f() {
    return this.addUser.controls
  }

  addPlus(event){
    if(event.target.value.substring(0,1) != "+" && event.target.value != "")
      event.target.value = "+" + event.target.value
  }
  onUserSubmit() {
    let userPhone = this.f.countryCode.value + "-" + this.f.phoneNumber.value
    console.log(userPhone)
    this.user = new User(
          this.f.firstName.value, 
          this.f.lastName.value, 
          this.f.email.value, 
          this.f.monthlyAdvertisingBudget.value, 
          this.f.countryCode.value,
          this.f.phoneNumber.value)
    console.log(this.user)
    this.store.dispatch(addUser(this.user))
    this.toastVisible = !this.toastVisible
  }

  navigateHome(){
    this.router.navigate([''])
  }

}
