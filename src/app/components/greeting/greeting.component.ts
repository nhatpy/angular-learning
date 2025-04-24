import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  standalone: true,
  templateUrl: './greeting.component.html'
})
export class GreetingComponent {

  // Old way of defining input properties
  // @Input() message: string = 'Default /greeting message!';

  // New way of defining input properties based on signals - new feature in Angular 17+
  message = input('Default greeting message!');
}
