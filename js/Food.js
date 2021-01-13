class Milk{
    constructor(){
   this.image=loadImage("Milk.png")
   this.FoodStock=0;
   this.lastfed=0
    }
    getFoodStock(){
 return this.FoodStock;
 }
 

 updateFoodStock(stock){
  this.FoodStock=stock
   
 }
 deductFood(name){
     if(this.FoodStock<0){
         this.FoodStock=this.FoodStock-1
     }
 }

 display(){
     var x=80,y=100;
     imageMode(CENTER)
    image(this.image,220,220,70,70)
     if(this.FoodStock!=0){
         for(var i=0;i<this.FoodStock;i++){
             if(i%10==0){
                 x=80;
                 y=y+50
             }
            image(this.image,x,y,50,50);
            x=x+30
         }
     }
     
 }
}











