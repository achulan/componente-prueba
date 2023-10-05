import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, Renderer2, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() users: {dispo:boolean, label:string, value:string}[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  selectedUser: string | null = null;
  selectorOpen = false;

  onSelect(option: string) {
    this.selectedUser = option;
    this.optionSelected.emit(option);
    this.selectorOpen = false; // Cierra el desplegable después de seleccionar una opción
  }

  toggleDropdown() {
    this.selectorOpen = !this.selectorOpen;
  }

}
