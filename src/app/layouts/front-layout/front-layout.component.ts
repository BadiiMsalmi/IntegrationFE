import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/views/services/auth-user.service';

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {

  constructor(public au:AuthUserService,private route:Router) {

   }

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }

}
