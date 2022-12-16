import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any
  productDetails:any  // to use in html

  constructor(private route:ActivatedRoute,private ds:DataService) {
    this.route.params.subscribe(data=>this.id=data['id'])
  }

  ngOnInit(): void {
    this.ds.getoneproduct(this.id).subscribe(data=>this.productDetails=data)
  }

}
