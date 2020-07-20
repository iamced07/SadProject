import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  loginUser(event){
    event.preventDefault()
    const target = event.target
    const email = target.querySelector('#email').value
    const pass = target.querySelector('#password').value

    this.auth.getUserDetails(email,pass).subscribe(data =>{
      if(data.success){
        
      }else{
        window.alert(data.message)
      }
    })
    console.log(email, pass)
  }
}
