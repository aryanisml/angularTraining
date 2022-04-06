import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductComponent implements OnInit {

  productData : Array<any> =[];
  constructor(private productService : ProductService,
    private router: Router) { 
   this.getProductData();
  }

  ngOnInit(): void {
  }


  private getProductData() {
    this.productService.getProductData().subscribe((res)=>{
      this.productData = res;
      console.log(this.productData);
    })
  }


  goToProudct(id: number){
    this.router.navigate(['/about/product', id]);
  }


}
