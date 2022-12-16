import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  helper = new JwtHelperService()
  constructor(private http: HttpClient) { }

  register(body: any) {
    return this.http.post(`${environment.backendUrl}/register`, body)
  }

  login(body: any) {
    return this.http.post(`${environment.backendUrl}/login`, body)
  }

  saveToken(token: any) {
    localStorage.setItem('token', token)
  }

  userLoggedIn() {

    if (!localStorage.getItem('token')) {
      return false
    }
    let token: any = localStorage.getItem('token')
    let decodeToken = this.helper.decodeToken(token)

    if (decodeToken.role) {
      return false
    }

    if (this.helper.isTokenExpired(token)) {
      return false
    }
    return true
  }
}
