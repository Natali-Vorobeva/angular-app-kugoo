import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  nrSelect = 'Везде';
  options = ['Везде', 'Детские', 'Влагозащищенные', ];
}
