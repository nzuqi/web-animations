import { animate, query, sequence, style, transition, trigger } from '@angular/animations';
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
    ]),
    trigger('animateCards', [
      transition(':enter', [
        query('.cards .card', style({ opacity: 0, marginTop: '100px' })),
        sequence([
          query('.card:nth-child(1)', animate('400ms ease-in', style({ opacity: 1, marginTop: '0px' }))),
          query('.card:nth-child(2)', animate('400ms ease-in', style({ opacity: 1, marginTop: '0px' }))),
          query('.card:nth-child(3)', animate('400ms ease-in', style({ opacity: 1, marginTop: '0px' }))),
          query('.card:nth-child(4)', animate('400ms ease-in', style({ opacity: 1, marginTop: '0px' }))),
          query('.card:nth-child(5)', animate('400ms ease-in', style({ opacity: 1, marginTop: '0px' }))),
        ])
      ])
    ]),
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
