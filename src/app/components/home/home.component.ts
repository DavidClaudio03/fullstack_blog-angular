import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public page_title: string;
  constructor() {
    this.page_title = "Home";
  }
  ngOnInit(): void {
    console.log('Home Component ');
    }
}
