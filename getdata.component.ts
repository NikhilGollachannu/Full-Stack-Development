import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {

  constructor() { }
  items:any[]=[["hyderabad","50","High"],["Secundrabad","45","High"],["Nagole","60","High"]];
  item:number[];
  dis(event):void{
    this.item=this.items[event.target.value-1]
  }

  ngOnInit(): void {this.item=this.items[0]
  }

}
