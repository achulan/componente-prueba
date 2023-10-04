import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Output() optionSelected = new EventEmitter<string>();
  selectedOption2: string | null = null;
  selectorOpen = false;

  onSelect(option: string) {
    this.selectedOption2 = option;
    this.optionSelected.emit(option);
    this.selectorOpen = false; // Cierra el desplegable después de seleccionar una opción
  }

  toggleDropdown() {
    this.selectorOpen = !this.selectorOpen;
  }
}
