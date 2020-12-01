import { Component, OnInit } from '@angular/core';
import { bigTransport } from './bigTransport';
import { ITEMS } from './transportMockObj';

@Component({
  selector: 'app-on-click',
  templateUrl: './on-click.component.html',
  styleUrls: ['./on-click.component.css']
})

export class OnClickComponent implements OnInit {
  transportItems: bigTransport[] = ITEMS;
  selectedItem:bigTransport;
  constructor() { }

  ngOnInit(): void {
    this.selectedItem=this.transportItems[0];
  }

  printInfo(title){
     this.selectedItem=this.transportItems.find(item=>item.title==title);
    
  }

}
