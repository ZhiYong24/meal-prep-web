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

export interface Meal {
    mealName: string;
    protein?: string;
    veggies?: string;
    carbs?: string;
    remark?: string;
    timestamp?: string;
}