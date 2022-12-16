import { DataService } from './../../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id=''
  dataObject:any
  messageErr=''
  dataArray:any
  constructor(private route:ActivatedRoute,private ds:DataService,private router: Router) {
    this.route.params.subscribe(data=>this.id=data['id'])
    this.ds.getoneproduct(this.id).subscribe(data=>this.dataObject=data,(err:HttpErrorResponse)=>this.messageErr="Error Not Found 404")
  }

  ngOnInit(): void {
  }

  deleteproduct(id: any,i:any) {
    this.ds.deleteproduct(id).subscribe(data => {
      console.log(data)
      this.dataArray.splice(i,1)
      this.router.navigate(['admin/allproducts']);

    }
    )
  }


}
