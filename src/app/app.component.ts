import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngRouting';
  token: string|null =null;
  
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.token = sessionStorage.getItem("token");
      }
    });
  }

  ngOnInit(): void {
    this.token = sessionStorage.getItem("token");
   
  }

  logout(){
    sessionStorage.removeItem('token')
    this.router.navigate(['login']);
  }

}