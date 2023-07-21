import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlazonsService } from 'src/app/services/blazons.service';

@Component({
  selector: 'app-blazon-detail',
  templateUrl: './blazon-detail.component.html',
  styleUrls: ['./blazon-detail.component.scss']
})
export class BlazonDetailComponent implements OnInit {
  blason: any;
  id:any;

  constructor(private route: ActivatedRoute, private blasonService: BlazonsService, private router:Router) { }

  ngOnInit(): void {
    const blasonId = this.route.snapshot.paramMap.get('id');
    if (blasonId !== null) {
      this.blasonService.getBlason(blasonId)
        .subscribe(response => {
          this.blason = response;
        }, error => {
          console.error('Error al obtener los detalles del blason:', error);
        });
    } else {
      console.error('ID de blason es nulo.');
    }
  }

  deleteBlazon(){
    if (window.confirm('Are you sure?')) {
      this.blasonService.deleteBlason(this.blason.id)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
}

