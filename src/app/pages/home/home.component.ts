import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal([
    'Instalar el angular cli',
    'Crear proyecto',
    'Crear componentes',
    'Crear servicio'
  ]);

  changeHandler(event: Event){
    const input= event.target as HTMLInputElement;
    const newTask = input.value;   
    this.tasks.update((tasks) => [...tasks, newTask])
  }

  deleteTask(index: number){
    this.tasks.update((tasks)=> tasks.filter((task, position) => position !== index));
  }
}
