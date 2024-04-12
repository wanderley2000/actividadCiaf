import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoCiaf';

  constructor(private router: Router) {}
  
  goToHome() {
    this.router.navigate(['/home']);
}
}