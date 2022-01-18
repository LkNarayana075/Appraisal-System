import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: any;
  name: any;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.name = localStorage.getItem('name');
    console.log(localStorage.getItem('name'));
  }
  logout() {
    localStorage.removeItem('role');
    localStorage.removeItem('SeesionUser');
    localStorage.clear();
    this.route.navigate(['./']);
  }
  getShortName(fullName:any) { 
    return fullName.split(' ').map((n: any[]) => n[0]).join('');
  }
}
