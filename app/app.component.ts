import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <h3>{{currentFocus}}{{month}}/{{day}}/{{year}}</h3>
    <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
    <hr>
    <edit-meal [childSelectedMeal] ="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
    <new-meal (newMealSender)="addMeal($event)"></new-meal>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'The meals consumed on: '
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedMeal = null;

  masterMealList: Meal[] = [
  new Meal('Pop.tarts', 'it was very sugary', 300),
  new Meal('chips', 'it was good', 3890)

  ];

  finishedEditing() {
    this.selectedMeal = null;
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
