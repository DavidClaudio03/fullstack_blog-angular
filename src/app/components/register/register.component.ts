import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  constructor () {
    this.page_title = "Registrate";
  }
  ngOnInit(): void {
    console.log('Registro inicializado');
  }
}
