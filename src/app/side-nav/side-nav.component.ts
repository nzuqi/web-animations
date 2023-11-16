import { animate, query, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('menuHover', [
      state('in', style({ transition: 'all .3s ease-out' })),
      state('out', style({ transition: 'all .3s ease-out' })),
      // transition('* => *', animate('300ms ease')),
    ])
  ]
})
export class SideNavComponent {
  darkMode = true;
  navigation: any[] = [
    { icon: 'space_dashboard', name: 'Dashboard', route: '' },
    { icon: 'grouped_bar_chart', name: 'Activity', route: '/activity' },
    { icon: 'date_range', name: 'Schedule', route: '/schedule' },
    { icon: 'page_info', name: 'Settings', route: '/settings' },
  ];

  changeTheme(isDarkMode: boolean): void {
    this.darkMode = isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }

  state: string = '';

  @HostListener('mouseenter', ['$event']) onEnter = (event: MouseEvent) => this.state = 'in';

  @HostListener('mouseleave') onLeave = () => this.state = 'out';

}
