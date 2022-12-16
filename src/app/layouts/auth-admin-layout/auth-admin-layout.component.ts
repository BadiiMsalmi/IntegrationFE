import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {

  datarecived: any
  url:any
  msgAuthErr:any
  constructor(private ads: AuthadminService, private route: Router,private arouter:ActivatedRoute) {
    if(this.ads.loggedIn() == true){
      this.route.navigate(['admin/'])
    }
  }

  ngOnInit(): void {
    this.url  = this.arouter.snapshot.queryParams['returnUrl'] || '/admin/'
  }

  loginAdmin(f: any) {
    let data = f.value

    this.ads.login(data).subscribe(response=>{
      this.datarecived = response
      this.ads.saveDataProfil(this.datarecived.token.token)
      this.route.navigate([this.url])
    },
    err=>this.msgAuthErr=err.error.err);
  }



}
