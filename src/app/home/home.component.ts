import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  homeMessage = signal('Hello, world!');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user has press key ${event.key} something!`)
  }
}
