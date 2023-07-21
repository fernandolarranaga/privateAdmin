import { Component, OnInit } from '@angular/core';
import { BlazonsService } from 'src/app/services/blazons.service';


@Component({
  selector: 'app-blazons',
  templateUrl: './blazons.component.html',
  styleUrls: ['./blazons.component.scss']
})
export class BlazonsComponent implements OnInit {
  heraldry: any = [];
image: any;


  constructor(public blazonService: BlazonsService) { }

  ngOnInit(): void {
    this.getBlazons()
  }

  getBlazons(){
    this.blazonService.getBlazons()
    .subscribe(data=>this.heraldry=data);
    console.log(this.heraldry.content)
  }

  

  
}
