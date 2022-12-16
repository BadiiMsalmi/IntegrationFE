import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from './../../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  error:any
  dataForm:any
  dataToken:any
  constructor(private aus:AuthUserService,private route:Router) { }

  ngOnInit(): void {
  }

  login(form:any){
    this.dataForm = form.value
    this.aus.login(this.dataForm).subscribe(data => {
      this.dataToken=data
      this.aus.saveToken(this.dataToken.token)
      this.route.navigate(['/'])
    },
      (err: HttpErrorResponse) => this.error = err.error.error
    )

  }

  register(form: any) {
    this.dataForm = form.value
    this.aus.register(this.dataForm).subscribe(data => {
      this.dataForm = data, this.route.navigate(['/login'])
    },
      (err: HttpErrorResponse) => this.error = err.error.error
    )
  }



  switch = false;
  onAdd() {
    this.switch = true;
  }

  onRemove() {
    this.switch = false;
  }

}
