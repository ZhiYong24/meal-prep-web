import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Meal } from '../../../Model/model';
import { WebService } from '../../../services/web-service.service';

@Component({
  selector: 'app-add-new-meal',
  templateUrl: './add-new-meal.component.html',
  styleUrls: ['./add-new-meal.component.scss']
})
export class AddNewMealComponent implements OnInit{
  meal!: Meal;
  submitted: boolean = false;

  constructor(private webservice: WebService) { }

  ngOnInit(){
    this.meal = {} as Meal;
  }

  onSubmit(form: NgForm){
    if (form && form.valid){
      this.submitted = true;
      this.webservice.addMeal(this.meal);
      console.log(this.meal);
    }
  }

  resetForm(form: NgForm){
    this.meal.mealName = '';
    this.meal.protein = '';
    this.meal.carbs = '';
    this.meal.veggies = '';
    this.meal.remark = '';
    this.submitted = false;
    form.form.markAsPristine();
  }
}
