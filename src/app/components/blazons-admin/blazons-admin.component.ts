import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlazonsService } from 'src/app/services/blazons.service';

@Component({
  selector: 'app-blazons-admin',
  templateUrl: './blazons-admin.component.html',
  styleUrls: ['./blazons-admin.component.scss']
})
export class BlazonsAdminComponent implements OnInit {

  heraldry: any = [];
  image: any;
  blason: any;
  id:any;
  
    constructor(public blazonService: BlazonsService, private router:Router, private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.getBlazons()
    }
  
    getBlazons(){
      this.blazonService.getBlazons()
      .subscribe(data=>this.heraldry=data);
      console.log(this.heraldry.content)
    }
  


       deleteBlazon(id: any) {
      if (window.confirm('Are you sure?')) {
        this.blazonService.deleteBlason(id).subscribe(() => {
          this.router.navigate(['/']);
        }, (error) => {
          console.error('Error al eliminar el blazon', error);
        });
      }
    }
  
    
  }
