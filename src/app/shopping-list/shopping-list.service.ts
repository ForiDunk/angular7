import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] =[
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredinet: Ingredient) {
    this.ingredients.push(ingredinet);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredinets: Ingredient[]) {
    this.ingredients.push(...ingredinets);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}