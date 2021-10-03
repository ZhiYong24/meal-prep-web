import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Meal } from '../../../Model/model';
import { WebService } from '../../../services/web-service.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditMealDialogComponent } from './edit-meal-dialog/edit-meal-dialog.component';


@Component({
  selector: 'app-manage-meal',
  templateUrl: './manage-meal.component.html',
  styleUrls: ['./manage-meal.component.scss']
})
export class ManageMealComponent implements OnInit, AfterViewInit {
  meal!: Meal[];
  displayedColumns: string[] = ['mealName', 'protein', 'carbs', 'veggies','remark', 'timestamp', 'deleteRow'];
  dataSource = new MatTableDataSource(this.meal);
  
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private webService: WebService,
    private changeDetectorRefs: ChangeDetectorRef,
    public dialog: MatDialog) { }

  ngAfterViewInit() {
    this.sort.sort(({ id: 'timestamp', start: 'desc'}) as MatSortable);
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void{
    this.webService.getMeal()
      .subscribe(
        (data: Meal[]) => {
          this.dataSource.data = data;
        }
      );
  }

  onDelete(meal: Meal){
    this.webService.deleteMeal(meal.mealName).subscribe(
      {
        next: data => {
          console.log(data);
          this.getMeal();
        },
        error: error => {
            alert(error);
            console.error(error);
        }
    });
  }

  onEdit(meal: Meal){
    let mealCopy = Object.assign({}, meal);
    const dialogRef = this.dialog.open(EditMealDialogComponent, {
      data: mealCopy
    });

    dialogRef.afterClosed().subscribe(result => {

      if(this.isValid(result)){
        console.log(JSON.stringify(result));
        this.webService.editMeal(meal.mealName, result)
          .subscribe(
            {
              next: data => {
                console.log(data);
                this.getMeal();
              },
              error: error => {
                  alert(error);
                  console.error(error);
              }
          });
      }

    });
  }

  isValid(meal: Meal): boolean{
    if (!meal.protein?.trim() && !meal.carbs?.trim() && !meal.veggies?.trim()){
      alert("A meal must contain at least one protein, carbs or veggies.");
      return false;
    }
    
    return true;
  }
}
