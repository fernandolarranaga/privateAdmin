
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Blazon} from '../../blazon';
import { Router } from '@angular/router';
import { BlazonsService } from 'src/app/services/blazons.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  heraldrys: any;
  blasones:Blazon[]=[]

formApps= {
  content: '',
  date: '', 
  img: '',
  fecha:''
};


  constructor(public heraldry:BlazonsService, private route: Router ) { }

  ngOnInit(): void {
    
  }

  crearEscudo(){
    this.heraldry.createBlason(this.formApps)
    .subscribe(data => {
      this.heraldrys =data;
      this.route.navigate(['/admin'])
      
    })
  }

  createBlazons(){
    this.formApps.fecha = new Date().toISOString();

    this.heraldry.createBlason(this.formApps)
    .subscribe(data => {
      this.blasones =data;
      this.route.navigate(['/admin'])
  })}
}
