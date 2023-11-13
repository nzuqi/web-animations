import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
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

}
