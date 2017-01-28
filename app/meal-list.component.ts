import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <label>I would like to view </label>
    <select (change)="onChange($event.target.value)">
      <option value="allMeals" selected="selected">All Meals</option>
      <option value="lowCalories">Meals Under 500 Calories</option>
      <option value="highCalories">Meals Over 500 Calories</option>
    </select>
  <ul>
  <li *ngFor="let currentMeal of childMealList | completeness:filterByCompleteness">Name: {{currentMeal.name}} <br> Details: {{currentMeal.details}} <br> Calories: {{currentMeal.calories}} <br>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button></li>
  </ul>

  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  filterByCompleteness: string = "allMeals";

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  onChange(optionFromMenu) {
    this.filterByCompleteness = optionFromMenu;
  }

}
