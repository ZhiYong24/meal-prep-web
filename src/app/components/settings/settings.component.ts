import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private breakpointObserver: BreakpointObserver) { }

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      //For handset/mobile device screen
      if (matches) {
        return {
          totalColumn: 1,
          mainCard: {title: 'Settings', cols: 1, rows: 1},
        };
      }

      //For normal web device screen
      return {
        totalColumn: 1,
        mainCard: {title: 'Settings', cols: 1, rows: 1},
      };
    })
  );
}
