import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductComponent implements OnInit, OnDestroy {

  productData : Array<any> =[];
  private destroy$ : Subject<boolean> = new Subject<boolean>();
  constructor(private productService : ProductService,
    private router: Router) { 
   this.getProductData();
  }
  ngOnDestroy(): void {
    console.log('destroy......');
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
   
  }

  

  private getProductData() {
    this.productService.getProductData()
     .pipe(takeUntil(this.destroy$))
    .subscribe((res)=>{
      this.productData = res;
      console.log(this.productData);
    })
  }


  goToProudct(id: number){
    this.router.navigate(['/about/product', id]);
  }


}
