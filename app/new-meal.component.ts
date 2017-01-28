import { Component, Input, Output, EventEmitter } from  '@angular/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
    <div>
      <div>
        <label>Enter the name of the meal:</label>
        <input #newName>
      </div>
      <div>
        <label>Enter additional details:</label>
        <input #newDetails>
      </div>
      <div>
        <label>Calories:</label>
        <input #newCalories>
      </div>
      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
