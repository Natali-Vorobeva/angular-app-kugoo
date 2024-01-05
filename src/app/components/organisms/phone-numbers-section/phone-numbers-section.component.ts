import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-numbers-section',
  templateUrl: './phone-numbers-section.component.html',
  styleUrl: './phone-numbers-section.component.scss'
})
export class PhoneNumbersSectionComponent implements OnInit {

  public isOpenModal: boolean = false

  constructor() {}

  ngOnInit(): void {
  }

  clickHandler(event: any) {
    this.isOpenModal = true;
    event.stopPropagation();
  }

  close() {
    this.isOpenModal = false;
  }
}
