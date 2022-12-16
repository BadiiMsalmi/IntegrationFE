import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/views/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducts:any   // to use in html
  constructor(private asd:DataService) {
    this.asd.getAllProducts().subscribe(data=>this.allProducts=data)
  }

  ngOnInit(): void {
  }

}
