import { Activity } from '../activity/activity-builder.model';
export class ActivityService{
    private pizzaitems=[];
    count:number=1;

  currentfeature: string = 'ingredients';
  ingredients: Activity
  loadfeature(feature: string) {
    this.currentfeature = feature;
    //return this.currentfeature
  }

  ingredientsData(ingredients: Activity) {
    //Step 3 Store the value from the event in the variable
    this.ingredients = ingredients;
    this.pizzaitems.push({
      name:this.ingredients.name + '-' + this.count,
      desc:this.ingredients.desc,
      img:this.ingredients.img}
      );
      this.count++;
  }
  getIngredients(){
      return this.pizzaitems.slice()
  }

}