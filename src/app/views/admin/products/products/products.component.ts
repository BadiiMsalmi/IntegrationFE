import { Router } from '@angular/router';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  dataArray: any
  constructor(private ds: DataService,private route:Router) {
    this.ds.getAllProducts().subscribe(data => this.dataArray = data)
  }

  ngOnInit(): void {
  }

  deleteproduct(id: any,i:any) {
    this.ds.deleteproduct(id).subscribe(data => {
      console.log(data)
      this.dataArray.splice(i,1)

    }
    )
  }

  details(id:any){
    this.route.navigate(['/admin/productdetails/'+id])
  }
}
