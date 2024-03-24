import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html'
})
export class NavbarComponent{
  title="List of navbar"
  getTitle(){
    return this.title;
  }
}
