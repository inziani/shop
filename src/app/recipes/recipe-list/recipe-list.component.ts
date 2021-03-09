import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://pixabay.com/vectors/recipe-label-icon-symbol-spoon-575434/'),
    new Recipe('A test recipe', 'This is simply a test', 'https://pixabay.com/photos/recipe-dish-lunch-nutrition-food-3889916/')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
