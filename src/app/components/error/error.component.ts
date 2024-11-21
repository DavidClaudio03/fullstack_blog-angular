import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent implements OnInit {
  public page_title: string;

  constructor() {
    this.page_title = "Oops! La página no se encuentra.";
  }
  ngOnInit(): void {
  };
}
