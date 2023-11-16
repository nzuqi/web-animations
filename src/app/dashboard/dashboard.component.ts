import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('animateNotificationsBadge', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('200ms 1s ease-in', style({ transform: 'scale(1.8)' })),
        animate('200ms ease-out', style({ transform: 'scale(1)' })),
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
