import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  wellcome = 'Hola';
  tasks = signal([
    'Instalar el angular cli',
    'Crear proyecto',
    'Crear componentes'
  ]);
  name = signal('Sebastian');
  age = 18;
  disabled = true;
  image = 'https://w3schools.com/howto/img_avatar.png';

  person = signal({
    name: 'sebastian',
    age: 12,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  })

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keyDownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update(prevState => {
      return {
        ...prevState,
        age: parseInt(newValue)
      }
    });
  }
}
