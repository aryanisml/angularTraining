import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from './product-details.service';
import { merge, of, Subject, BehaviorSubject } from 'rxjs';
import { refCount, mergeMap, filter, withLatestFrom, map, scan, tap, concatMap, publishReplay, last, delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private selectedId : number =0;
  constructor(private activatedRoute : ActivatedRoute,
    private productDetailsService : ProductDetailsService) {
    this.getPramas();
    this.getAllApi();
    this.getSingleProduct();
    this.getSingleProductSwitch();
  }
    

  ngOnInit(): void {
  }

  getPramas(){
    this.activatedRoute.params.subscribe(data => {
      this.selectedId = <number>data.id;
    })
  }

  getAllApi(){
    this.productDetailsService.getAllApi().subscribe(response => {
      console.log(response);
    })
  }


  getSingleProduct() {
      this.productDetailsService
          .getProductData()
          .pipe(
            concatMap(data => {
              return this.productDetailsService.getSingleProduct(this.selectedId)
            })
          )
          .subscribe((response)=>{
            console.log(response);
          })
  }



  getSingleProductSwitch(){
    this.productDetailsService
          .getProductData()
          .pipe(
            switchMap(data => {
              return this.productDetailsService.getSingleProduct(this.selectedId)
            })
          )
          .subscribe((response)=>{
            console.log('switch map...');
            console.log(response);
          })
  }


}
