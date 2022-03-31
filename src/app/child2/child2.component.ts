import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  public numberItem : number  =0 ;
  constructor(private sharedService : SharedService) {
    this.sharedService.mySubject.subscribe(data => {
      this.numberItem = data;
    });
   }

  ngOnInit(): void {
  }

  onDecrement(){
    this.numberItem = this.numberItem-1;
    this.sharedService.mySubject.next(this.numberItem);
  }

}
