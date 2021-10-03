import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meal, MealPrep } from '../Model/model';

const baseUrl = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  constructor(private http: HttpClient) { }

  getMealPrep(date: string): Observable<MealPrep[]>{
    let params = new HttpParams().set('date', date);

    return this.http.get<MealPrep[]>(
      baseUrl + "meal-prep", {params});
  }

  addMealPrep(mealPrep: MealPrep){
    this.http
      .post(baseUrl + "meal-prep", mealPrep)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  getMeal(): Observable<Meal[]>{
    return this.http.get<Meal[]>(
      baseUrl + "meal"
    );
  }

  addMeal(meal: Meal): void{
    this.http
      .post(baseUrl + "meal", meal)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  editMeal(mealName: string, meal: Meal): Observable<unknown>{
    let param = new HttpParams().set('mealName', mealName);
    let options = {params: param, responseType: "text" as const};

    return this.http
      .post(baseUrl + "meal/replace", meal, options);
  }

  deleteMeal(mealName: string): Observable<string>{
    let param = new HttpParams().set('mealName', mealName);
    let options = {params: param, responseType: "text" as const};

    return this.http.delete(baseUrl + "meal", options);
  }

}