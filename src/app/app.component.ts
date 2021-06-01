import { Component } from '@angular/core';
import { AutoLogoutService } from './core/services/auto-logout.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(){    
  }

  ngOnInit() {
    
  }
}
