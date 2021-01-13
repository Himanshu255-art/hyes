//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,FoodImage;
var addFood,feed;
var fedTime,lastfed;
var FoodObj;
var feedDog;
function preload()
{
  //load images here
  dogHappy=loadImage("happydog.png")
  dogImg=loadImage("a.png")

 
 
}

function setup() {
	createCanvas(760, 500);
  database=firebase.database();
  dog=createSprite(650,250)
  dog.addImage(dogImg)
  dog.scale=0.2
  

  feed=createButton("Feed the Dog")
 feed.position(700,95)
 feed.mousePressed(feedDog)

 addFood=createButton("Add Food")
 addFood.position(800,95)
addFood.mousePressed(addFoods);

foodObj=new Milk();
foodObj1=new Milk();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,130,87)
fill(255,255,254)
textSize(15)

if(lastfed>=12){
  text("Last Feed : "+ lastfed%12 +" PM",350,30)
}else if(lastfed==0){
  text("Last Feed : 12 AM",350,30);
}else{
  text("Last Feed :"+lastfed + " AM",350,30);
}

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastfed=data.val();
});


foodObj.display();
foodObj1.display()
 drawSprites();
}
function addFoods(){
foodStock=foodStock+1;
  database.ref('/').update({
    Food:foodStock
  })
}  
function feedDog(){
 dog.addImage(dogHappy)

 foodObj.updateFoodStock(foodObj.getFoodStock()-1);
 database.ref('/').update({
  Food:foodObj.getFoodStock(),
  FeedTime:hour()

 })
}
 
  


function readStock(data){
  
  
  foodStock=data.val();
  foodObj.updateFoodStock(foodStock)
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



