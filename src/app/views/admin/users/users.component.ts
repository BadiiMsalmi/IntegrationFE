import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataArray:any
  constructor(private ds:DataService,private route:Router) {
    this.ds.getAllUsers().subscribe(data=>this.dataArray=data)
   }

  ngOnInit(): void {
  }

  deleteuser(id: any,i:any) {
    this.ds.deleteuser(id).subscribe(data => {
      console.log(data)
      this.dataArray.splice(i,1)
    }
    )
  }


  details(id:any){
    this.route.navigate(['/admin/userdetails/'+id])
  }
}
