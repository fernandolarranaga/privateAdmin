import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
    .subscribe(data=>this.heraldry=data.reverse());
    console.log(this.heraldry.content)
  }

  page_size: number = 3;
  page_number: number = 1;
  pageSizeOptions=[3, 6, 9, 12, 100]
  handlePage(e:PageEvent){
    this.page_size=e.pageSize;
    this.page_number=e.pageIndex +1;

  }

  
}
