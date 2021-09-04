import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export class MealPrep {
  id: number = 69
  meal: number = 2
  containerType: string = "default" 
  protein: string = "default" 
  proteinQuantity: number  = 2
  veggies: string = "default" 
  veggiesQuantity: number = 2
  carb: string = "default" 
  carbQuantity: number  = 2
  date: string = "2021-09-01" 
}

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  baseUrl = 'http://localhost:8080/meal-prep';

  constructor(private http: HttpClient) { }

  getMealPrep(date: string): Observable<MealPrep[]>{
    let params = new HttpParams().set('date', date);

    return this.http.get<MealPrep[]>(
      this.baseUrl, {params});
  }

  addMealPrep(mealPrep: MealPrep){
    this.http.post(this.baseUrl, mealPrep)
      .subscribe((response) => console.log(response),
      (error) => console.log(error));
  }
}