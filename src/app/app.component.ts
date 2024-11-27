import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wellcome = 'Hola';
  tasks =[
    'Instalar el angular cli',
    'Crear proyecto',
    'Crear componentes'
  ]
}
