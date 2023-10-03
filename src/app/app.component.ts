import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UsersOption } from './users-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'componente-prueba';
  selectedOption: string = '';

  onUserSelected(selectedUserId: string) {
    console.log('Usuario seleccionado:', selectedUserId);
    this.selectedOption = selectedUserId;
  }

  users: UsersOption[] = [
    { dispo: true , label: 'Wade Cooper', value: 'usuario1' },
    { dispo: true , label: 'Arlene Mccoy', value: 'usuario2' },
    { dispo: false , label: 'Devon Webb', value: 'usuario3' },
    { dispo: true , label: 'Tom Cook', value: 'usuario4' },
    { dispo: false , label: 'Tanya Fox', value: 'usuario5' },
    { dispo: false , label: 'Hellen Schultz', value: 'usuario6' },
    { dispo: true , label: 'Claudie Smitham', value: 'usuario7' },
    { dispo: true , label: 'Emil Schaefer', value: 'usuario8' },
  ];
  
}
