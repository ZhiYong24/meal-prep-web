import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface MealPrep {
  id: number,
  meal: number,
  containerType: string, 
  protein: string,
  proteinQuantity: number,
  veggies: string,
  veggiesQuantity: number,
  carb: string,
  carbQuantity: number,
  date: string
}

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {
  baseUrl = 'http://localhost:8080/meal-prep';

  constructor(private http: HttpClient) { }

  mealDate : string = "2021-09-01";

  getMealPrep(): Observable<MealPrep[]>{
    let params = new HttpParams().set('date', '2021-09-01');

    return this.http.get<MealPrep[]>(
      this.baseUrl, {params});
  }
}
