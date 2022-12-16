import { AuthadminService } from 'src/app/views/services/authadmin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  username:any
  constructor(private asd:AuthadminService,private route:Router) {
    this.username=asd.getUsername()
    if(this.asd.loggedIn()){
      console.log('ADMIN CONNECTED')
    }else{
      this.route.navigate(['/admin/login'])
    }
   }


  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/admin/login'])
  }
}
