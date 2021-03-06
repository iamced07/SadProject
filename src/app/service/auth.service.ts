import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getUserDetails(email, password){
    return this.http.post('/api/auth.php', {
      email,
      password
    })
  }
}
