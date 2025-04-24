import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  //signal is a new feature in Angular 16 that allows you to create reactive state variables. (like useState in React)
  //signal is Writable and can be updated using the update function or set function.
  count = signal(0);

  //computed is a Readonly signal that is derived from one or more signals. 
  //It is used to create derived state that automatically updates when the underlying signals change.
  countMessage = computed(() => {
    return 'The current count is ' + this.count();
  })
  // update function of signal is used to update the value of the signal. The update function takes a callback function that 
  // receives the current value of the signal and returns the new value
  increment() {
    this.count.update(value => value + 1);
  }
  decrement() {
    this.count.update(value => value - 1);
  }
  // in other hand, set function of signal is used to set directly the value of the signal
  reset() {
    this.count.set(0);
  }
}
