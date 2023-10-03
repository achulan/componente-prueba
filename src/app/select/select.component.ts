import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent {
  @Input() options: any[] = [];
  @Output() selectionChange = new EventEmitter<string>();

  selectedValue: string = '';

  constructor() {}

  onSelectionChange() {
    this.selectionChange.emit(this.selectedValue);
  }
}