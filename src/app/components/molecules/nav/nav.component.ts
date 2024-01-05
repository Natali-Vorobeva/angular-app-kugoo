import { navHeaderItemsGray } from './../../../utils/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  public navHeaderItemsGray = navHeaderItemsGray;

  ngOnInit(): void {}
}
