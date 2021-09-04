import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPrep, WebServiceService } from './services/web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  mealPrep: MealPrep[] = [];
  date: string = "2021-09-01";

  constructor(private webService: WebServiceService) {}

  loadMealPrep(){
    this.webService.getMealPrep(this.date)
      .subscribe(
        (data: MealPrep[]) => {
          this.mealPrep = data;
        }
      );
  }

  insertMealPrep(){
    this.webService.addMealPrep(new MealPrep());
  }
}
