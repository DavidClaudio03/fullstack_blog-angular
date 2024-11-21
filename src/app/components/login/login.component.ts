import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  public page_title: string;

  constructor() {
    this.page_title = "Identificate";

  }

  ngOnInit(): void {

  }

}
