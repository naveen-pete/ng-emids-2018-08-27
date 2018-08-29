import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // External Template
  templateUrl: './app.component.html',

  // Inline template
  // template: '<h2>My first Angular App (inline)</h2>',

  // External styles
  styleUrls: ['./app.component.css']

  // Inline styles
  // styles: [`
  //   h2 {
  //     color: green;
  //   }
  // `]
})
export class AppComponent {
  title = 'app';
}
