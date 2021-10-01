import { Component, OnInit } from '@angular/core';
import { MealPrep } from '../../Model/model';
import { WebService } from '../../services/web-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mealPrep: MealPrep[] = [];
  date: string = "2021-09-01";

  constructor(private webService: WebService) {}

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
