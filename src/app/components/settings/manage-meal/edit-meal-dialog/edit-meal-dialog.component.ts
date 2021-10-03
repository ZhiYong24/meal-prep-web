import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Meal } from '../../../../Model/model';

@Component({
  selector: 'app-edit-meal-dialog',
  templateUrl: './edit-meal-dialog.component.html',
  styleUrls: ['./edit-meal-dialog.component.scss']
})
export class EditMealDialogComponent{
  constructor(public dialogRef: MatDialogRef<EditMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public meal: Meal) {}

  onCancel(){
    this.dialogRef.close();
  }
}
