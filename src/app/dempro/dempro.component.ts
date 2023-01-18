import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dempro',
  templateUrl: './dempro.component.html',
  styleUrls: ['./dempro.component.css']
})
export class DemproComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  url: string = "../assets/img1.jpg";
    imageChange(event: any){
        this.url = event.target.src;
    }
}
