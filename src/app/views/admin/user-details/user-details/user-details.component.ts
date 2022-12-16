import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/views/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id = ''
  dataObject: any
  messageErr = ''
  dataArray: any
  constructor(private route: ActivatedRoute, private ds: DataService, private router: Router) {
    this.route.params.subscribe(data => this.id = data['id'])
    this.ds.getoneuser(this.id).subscribe(data => this.dataObject = data, (err: HttpErrorResponse) => this.messageErr = "Error Not Found 404")
  }

  ngOnInit(): void {
  }

  deleteuser(id: any) {
    this.ds.deleteuser(id).subscribe(data => {
      console.log(data)
    }
    )
    this.router.navigate(['/admin/allusers']);
  }
}
