import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

 public  numberItem: number= 0;
  constructor(private sharedService : SharedService) {
    this.sharedService.mySubject.subscribe(data=> this.numberItem = data);
   }

  ngOnInit(): void {
  }
  onSumbit() {
     this.numberItem = this.numberItem + 1;
     this.sharedService.mySubject.next(this.numberItem);
  }
}
