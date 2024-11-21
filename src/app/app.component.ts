import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ErrorComponent,
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-angular';
}
