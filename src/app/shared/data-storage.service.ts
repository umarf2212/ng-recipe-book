import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
    constructor(
        private httpClient: HttpClient, 
        private recipeService: RecipeService) {}

    storeRecipes() {
        //const headers = new HttpHeaders().set('Authorization', 'Bearer askjgh');

        // return this.httpClient.put(
        //     'https://umar-ng-recipe-book.firebaseio.com/recipes.json', 
        //     this.recipeService.getRecipes(), {
        //         observe: 'body',
        //         params: new HttpParams().set('auth', token)
        //         //headers: headers
        //     }
        // );

        const req = new HttpRequest('PUT', 'https://umar-ng-recipe-book.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true
        });
        return this.httpClient.request(req);
    }

    getRecipes() {
        //this.httpClient.get<Recipe[]>('https://umar-ng-recipe-book.firebaseio.com/recipes.json?auth=' + token)
        this.httpClient.get<Recipe[]>('https://umar-ng-recipe-book.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
        })
            .pipe(map(
                (recipes) => {
                    console.log(recipes);
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            ))
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }   
            );
    }
}