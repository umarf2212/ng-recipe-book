import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe', 
            'This is simple a test.', 
            'https://www.apinchofhealthy.com/wp-content/uploads/2018/07/Instant-Pot-Spaghetti-closeup-twirl.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Just another recipe', 
            'Well yeah you read it right.', 
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsg33_byAzTjFX4nIfZ0xuVD-hJVVd7UBi2H-1MLP9hi0ZnN2t',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]),
        new Recipe(
            'A test recipe', 
            'This is simple a test.', 
            'https://www.apinchofhealthy.com/wp-content/uploads/2018/07/Instant-Pot-Spaghetti-closeup-twirl.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
            
    ];

    constructor(){}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes(){
        return this.recipes.slice(); 
        //slice will return a copy of the recipes
        //and not the actual recipes variable itself
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}