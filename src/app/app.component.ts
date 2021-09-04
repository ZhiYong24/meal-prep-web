import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MealPrep, WebServiceService } from './services/web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'meal-prep-web';
  mealPrep: MealPrep[] = [];

  constructor(private webService: WebServiceService) {}

  // showMealPrep(){
  //   this.webService.getMealPrep()
  //     .subscribe(
  //       (data: MealPrep) => this.mealPrep = {
  //         id: data.id,
  //         meal: data.meal,
  //         containerType: data.containerType, 
  //         protein: data.protein,
  //         proteinQuantity: data.proteinQuantity,
  //         veggies: data.veggies,
  //         veggiesQuantity: data.veggiesQuantity,
  //         carb: data.carb,
  //         carbQuantity: data.carbQuantity,
  //         date: data.date,
  //        }
  //     );
  // }

  showMealPrep2(){
    this.webService.getMealPrep()
      .subscribe(
        (data: MealPrep[]) => {
          this.mealPrep = data;
          console.log(data);
          console.log(this.mealPrep);
          this.mealPrep.forEach(x => console.log(x.carb));
        }
      );
  }
}
