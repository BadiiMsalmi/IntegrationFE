import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthUserService } from './../../../services/auth-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataForm: any
  error: any
  constructor(private aus: AuthUserService, private route: Router) { }

  ngOnInit(): void {
  }

  register(form: any) {
    this.dataForm = form.value
    this.aus.register(this.dataForm).subscribe(data => {
      this.dataForm = data, this.route.navigate(['/login'])
    },
      (err: HttpErrorResponse) => this.error = err.error.error
    )
  }

}
