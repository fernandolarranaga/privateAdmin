import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlazonsService } from 'src/app/services/blazons.service';

@Component({
  selector: 'app-blazon-id-admin',
  templateUrl: './blazon-id-admin.component.html',
  styleUrls: ['./blazon-id-admin.component.scss']
})
export class BlazonIdAdminComponent implements OnInit {
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
}
