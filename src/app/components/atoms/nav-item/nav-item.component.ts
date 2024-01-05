import { NavHeaderItemsGray } from './../../../utils/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent implements OnInit {
  public item?: NavHeaderItemsGray
  service: string = 'Сервис'
  styleHeaderGray: string = ''
  styleFont: string = ''
  styleColor: string = ''
  ngOnInit(): void {
  }

}
