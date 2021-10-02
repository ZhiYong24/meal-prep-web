import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Meal } from '../../../Model/model';
import { WebService } from '../../../services/web-service.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


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

  constructor(private webService: WebService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal(): void{
    this.webService.getMeal()
      .subscribe(
        (data: Meal[]) => {
          this.meal = data;
          this.dataSource = new MatTableDataSource(this.meal);
          this.dataSource.sort = this.sort;
        }
      );
  }

  onDelete(meal: Meal){
    console.log(JSON.stringify(meal));
  }

  onEdit(meal: Meal){
    console.log(JSON.stringify(meal));
  }
}
