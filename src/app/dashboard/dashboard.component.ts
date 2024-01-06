import { animate, query, sequence, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('notificationsBadgeAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('100ms 1s ease-out', style({ transform: 'scale(1.8)' })),
        animate('100ms ease-in', style({ transform: 'scale(1)' })),
      ])
    ]),
    trigger('cardsAnimation', [
      transition(':enter', [
        query('.cards .card', style({ opacity: 0, marginTop: '150px' })),
        sequence([
          query('.card:nth-child(1)', animate('500ms ease-in', style({ opacity: 1, marginTop: '20px' }))),
          query('.card:nth-child(2)', animate('500ms ease-in', style({ opacity: 1, marginTop: '20px' }))),
          query('.card:nth-child(3)', animate('500ms ease-in', style({ opacity: 1, marginTop: '20px' }))),
          query('.card:nth-child(4)', animate('500ms ease-in', style({ opacity: 1, marginTop: '20px' }))),
          query('.card:nth-child(5)', animate('500ms ease-in', style({ opacity: 1, marginTop: '20px' }))),
        ])
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
