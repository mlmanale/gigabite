//gamestates
let gameStart = true;
let espresso = false;
let syrup = false;
let fridge = false;
let freezer = false;
let recipes = false;

//timer and order stuff
let orderTimer = 30;
let order1 = false;
let order2 = false;
let order3 = false;
let kitty1Img, kitty2Img, kitty3Img;


//cup variables
let cupW = 50;
let cupH = 75;
let cupBigW = 125;
let cupBigH = 187.5;
let cupSet = false;
let bigcupSet = false;
let setcup;

//syrup imgs
let caramel, vanilla, mocha, brownSugar;
//cold latte images
let cupimg, coldcup, icecup;
//cup with syrup spritesheet
let cupsheet;
let frame = 0;

//espresso machine
let espressoSheet;
let espressoFrame = 0;
let animateEspresso = false;
let espressoShot;
let espressoMade = false;

//trash
let trashcan;
let trashframe = 0;

//fridge and freezer
let fridgeFrame = 0;
let freezeFrame = 0;
let fridgeImg, milk, freezerImg;
let fakeFrame = 0;
let fridgeOpen = false;
let freezerOpen = false;

let noteY = 655;

//cup class

class Cup {
  constructor() {
    //this.ss = spriteSheet;
    this.spawn = false;
    this.trashed = false;
    this.ice = false;
  }

  draw() {
    if(!this.ice) {
      cupimg = coldcup;
    }
    else if (this.ice){
      cupimg = icecup;
    }

    //cup follows cursor on main page
    if(!espresso && !syrup && !fridge && !freezer && !recipes && !cupSet) {
      image(cupsheet, mouseX, mouseY, cupW, cupH, frame*150, 0, 150, 225 );
    }
    //cup follows cursor on zoomed screens
    else if ((espresso || syrup || fridge || freezer) && !cupSet) {
      image(cupsheet, mouseX, mouseY, cupW*2, cupH*2, frame*150, 0, 150, 225);
    }
    //cup set down on main page
    else if (!espresso && !syrup && !fridge && !freezer && !recipes && cupSet) {
      image(cupsheet, cupDown.x, 285, cupW, cupH, frame*150, 0, 150, 225 );
    }
    //cup set down on espresso screen
    else if(espresso && cupSet) {
      image(cupsheet, bigCupDown.x, 450, cupW*2, cupH*2, frame*150, 0, 150, 225 );
    }

  }

  update() {
    if (this.spawn && !this.trashed) {
      this.draw();
    }
  }
}


//general interactable item class
class Item {
  constructor(img, x, y, w, h) {
    this.img = img;
    this.x = x;
    this.y =y;
    this.w = w;
    this.h = h;
    this.moveable = false;
    this.spawn = true;
  }

  draw() {
    if(this.moveable) {
      image(this.img, mouseX, mouseY, this.w, this.h);
    }
    if(!this.moveable) {
      image(this.img, this.x, this.y, this.w, this.h);
    }
  }

  update() {
    if(this.spawn) {
      this.draw();
    }
  }

}

class AnimatedItem {
  constructor(img, x, y, w, h, frame, scale){
    this.img = img;
    this.x = x;
    this.y =y;
    this.w = w;
    this.h = h;
    this.frame = frame;
    this.scale = scale;
  }
  
  draw() {
    image(this.img, this.x, this.y, this.w, this.h, this.frame*(((this.scale*this.w))), 0, this.scale*this.w,  this.scale*this.h);
  }
}

function preload() {
  //anims and sprites will go here!
  gameFont = loadFont("minecraft.ttf");
  caramel = loadImage("img/caramelbig.png");
  vanilla = loadImage("img/vanillabig.png");
  mocha = loadImage("img/mochabig.png");
  brownSugar = loadImage("img/bsbig.png");
  coldcup = loadImage("img/cup.png");
  icecup = loadImage("img/cupice.png");
  cupsheet = loadImage("img/syrupcup.png");
  trashcan = loadImage("img/trashcan.png");
  cupstack = loadImage("img/coldcupstack.png");
  setcup = loadImage("img/setcup.png");
  filterPic = loadImage("img/filter.png");
  espressoSheet = loadImage("img/espressomachine.png");
  espressoShot = loadImage("img/espresso.png");
  fridgeImg = loadImage("img/fridge.png");
  milkImg = loadImage("img/milk.png");
  freezerImg = loadImage("img/freezer.png");
  kitty1Img = loadImage("img/kitty.png");
  kitty2Img = loadImage("img/kitty2.png");
  kitty3Img = loadImage("img/kitty3.png");

  cupDown = new Item(setcup, 200, 310, 80, 50);
  bigCupDown = new Item(setcup, 200, 500, 160, 100);
  coffee = new Cup();
  trash = new AnimatedItem(trashcan, 825, 525, 100, 150, trashframe, 1);
  espressoMachine = new AnimatedItem(espressoSheet, 420, 210, 200, 250, espressoFrame, 3);
  bigEspresso = new AnimatedItem(espressoSheet, 640, 300, 400, 500, espressoFrame, 1.5);
  cups1 = new Item(cupstack, 810, 267.5, 50, 135);
  cups2 = new Item(cupstack, 865, 262.5, 50, 145);
  coffeeFilter = new Item(filterPic, 280, 313, 53, 43);
  smallFridge = new AnimatedItem(fridgeImg, 625, 500, 250, 200, fridgeFrame, 3);
  bigFridge = new AnimatedItem(fridgeImg, 587.5, 375, 625, 500, fridgeFrame, 1.2 )
  bigMilk = new Item(milkImg, 700, 255, 117.5, 182.5);
  smallFreezer = new AnimatedItem(freezerImg, 375, 500, 250, 200, freezeFrame,3);
  bigFreezer = new AnimatedItem(freezerImg, 312.5, 375, 625, 500, freezeFrame, 1.2)
  halfFridge = new AnimatedItem(fridgeImg, 935, 375, 625, 500, fakeFrame, 1.2);
  halfFreezer = new AnimatedItem(freezerImg, -35, 375,  625, 500, fakeFrame, 1.2);
  caramelSyrup = new Item(caramel, 560, 252.5, 50, 165);
  vanillaSyrup = new Item(vanilla, 620, 252.5, 50, 165);
  mochaSyrup = new Item (mocha, 680, 252.5, 50, 165);
  bsSyrup = new Item(brownSugar, 740, 252.5, 50, 165);
  bigCaramel = new Item(caramel, 225, 340, 125, 412.5);
  bigVanilla = new Item(vanilla, 375, 340, 125, 412.5);
  bigMocha = new Item(mocha, 525, 340, 125, 412.5);
  bigBS = new Item(brownSugar, 675, 340, 125, 412.5);
  // shot1 = new Item(espressoShot, 597.5, 396, 150, 138);
}

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont(gameFont);
  textSize(22);
}

function draw() {
  background(220);
  // if(gameStart) {
  //   fill("black");
  //   text("Press enter to begin!", width/2, height/2);
  // }

  if (frameCount % 60 == 0 && orderTimer > 0) { 
    orderTimer --;
  }

  if(orderTimer <= 27) {
    order1 = true;
  }

  if(orderTimer <= 20) {
    order2 = true;
  }
  
  if(orderTimer <= 15) {
    order3 = true;
  }

  if(!espresso && !syrup && !fridge && !freezer && !recipes) {
    background("white");
    
    fill("gray");
    rect(450, 225, 900, 250)
  
    //counter
    fill(66,66,66);
    rect(450, 325, 900, 150)
  
    //counter edge
    fill(36,36,36);
    rect(450, 362.5, 900, 25);
  
    //bottom drawers
    fill("black");
    rect(450, 487.5, 900, 225);
  
    //espresso machine
    espressoMachine.draw();
    //filter
    coffeeFilter.update();
    // console.log(coffeeFilter.x, coffeeFilter.y);
  
    //syrups
    caramelSyrup.update();
    vanillaSyrup.update();
    mochaSyrup.update();
    bsSyrup.update();
  
    //cups
    fill("red");
    cups1.update();
    cups2.update();
    
    //frige and freezer
    freezerOpen = false;
    bigFreezer.frame == 0;
    smallFreezer.draw();
    smallFridge.draw();
  
    //trash
    trash.draw();
  
    //note
    noStroke();
    fill(255, 244, 179);
    rect(135, 495, 250, 220);

    //set cup down
    cupDown.update();

    fill("black");

    if(order1) {
      text("iced caramel latte", 135, 445); 
      image(kitty1Img, 70, 210, 90, 90);
  
    }

    if(order2) {
      text("cup of milk", 135, 495);
      image(kitty2Img, 170, 210, 90, 90);
    }

    if(order3) {
      text("cup of ice", 135, 545);
      image(kitty3Img, 270, 210, 90, 90);
    }
 
  }
  
  //counter for gamestates
  if (espresso || syrup) {
    background("gray");

    //counter
    fill(66,66,66);
    rect(450, 500, 900, 150);

    //counter edge
    fill(36,36,36);
    rect(450, 587.5, 900, 25);
  }
  
  //ESPRESSO
  if (espresso) {
    //espresso machine x2

    bigEspresso.draw();
    bigCupDown.update();
    coffeeFilter.update();
    coffeeFilter.h =  86;
    coffeeFilter.w = 106;
    coffeeFilter.x = 355;
    coffeeFilter.y = 510;
    

    push();
    fill(0,0,0, 127);
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      rect(75, 125, 130, 50); 
    }
    pop();

  }

  //SYRUP
  if (syrup) {
    //syrups - original size x2.5
    bigCaramel.update();
    bigVanilla.update();
    bigMocha.update();
    bigBS.update();
    
    push();
      fill(0,0,0, 127);
      if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
        rect(75, 125, 130, 50); 
      }
    pop();
  } //END SYRUP
  
  if(freezer) {
    background("gray");
 
    fill("purple");
    bigFreezer.draw();
    halfFridge.draw();
    

    if(bigFreezer.frame == 1) {
        freezerOpen = true;
    }

    push();
      fill(0,0,0, 127);
      if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
        rect(75, 125, 130, 50); 
      }
    pop();
  } //END FREEZER

  //FRIDGE
  if(fridge) {
    background("gray");


    //fridge original x2.5
    bigFridge.draw();
    halfFreezer.draw();

    if(bigFridge.frame == 1) {
      bigMilk.update();
    }
    

  } //END FREEZER

  //backbutton for gamestates
  if (espresso || syrup || fridge || freezer)
   {
      backButton();
      orderNote();

      //console.log(mouseX,mouseY);
   }

   if (recipes) {
     background("gray");
     backButton();
    
     fill("white");
     rect(450, 350, 600, 400);

     fill("black");
     text("iced caramel latte", 450, 200);
   }
  
  coffee.update();

  //HUD and GUI
  fill("yellow");
  rect(185, 50, 350, 80);
  rect(795, 50, 190, 80);

  if ((mouseX >= 700 && mouseX <= 890) && (mouseY >= 10 && mouseY <= 90)) {
    fill(0,0,0,127);
    rect(795, 50, 190, 80);
  }
  fill("black");
  text("instructions", 795, 50);
  text(orderTimer, 20, 20);

}

function mousePressed() {
  //back buttons and zoomed screen interactions
  if(syrup) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      syrup = false;
    }

    //caramel
    if (collision(bigCaramel) && coffee.spawn) {
      if(frame == 0) {
        frame = 1;
      }
      else if(frame == 1) {
        frame = 5;
      }
    }

    //vanilla
    if (collision(bigVanilla) && coffee.spawn) {
      if(frame == 0) {
        frame = 4;
      }
      else if(frame == 4) {
        frame = 8;
      }
    }

    //mocha 
    if (collision(bigMocha) && coffee.spawn) {
      if(frame == 0) {
        frame = 3;
      }
      else if(frame == 3) {
        frame = 7;
      }
    }

    //brown sugar 
    if (collision(bigBS) && coffee.spawn) {
      if(frame == 0) {
        frame = 2;
      }
      else if(frame == 2) {
        frame = 6;
      }
    }
  }
  
  if(freezer) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      freezer = false;
      freezerOpen = false;
      bigFreezer.frame = 0;
    }

    if (collision(bigFreezer) && !freezerOpen) { 
        bigFreezer.frame = 1;
    }

    if(collision(bigFreezer) && coffee.spawn && !cupSet && bigFreezer.frame == 1 && freezerOpen){
      if(frame == 0) {
        frame = 12;
      }
      if (frame == 10) {
        frame = 11;
      }
    }
  }

  if(fridge) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      fridge = false;
      bigFridge.frame = 0;
    }

    if(collision(bigMilk) && coffee.spawn && !cupSet && bigFridge.frame == 1) {
      if(frame == 0) {
        frame = 13;
      }
      if(frame == 9) {
        frame = 10;
      }
    }

    if(collision(bigFridge) && bigFridge.frame == 0 ) {
      bigFridge.frame = 1;
    } 
  }


  if(espresso) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      espresso = false;
      coffeeFilter.moveable = false;
      coffeeFilter.h =  43;
      coffeeFilter.w = 53;
      coffeeFilter.x = 280;
      coffeeFilter.y = 313;
      bigEspresso.frame = 0;
      coffeeFilter.spawn = true;
    }

    if(collision(bigCupDown) && coffee.spawn && !coffee.trashed){ 
      if(!cupSet){
        cupSet= true;
      }
      else {cupSet = false;}
    }

    if(collision(coffeeFilter)) {
      if((coffee.spawn && cupSet) || !coffee.spawn){
        coffeeFilter.moveable = true;
      }
    }

    if(collision(bigEspresso) && coffeeFilter.moveable && ((coffee.spawn && cupSet) || (!coffee.spawn))) {
      animateEspresso = true;
      coffeeFilter.moveable = false;

      let timer = setInterval(()=>{
        if (bigEspresso.frame < 10) {
          bigEspresso.frame ++;
          coffeeFilter.spawn = false;
        }
        else {
          bigEspresso.frame = 10;
          espressoMade = true;
          clearInterval(timer);
        }
      }, 500)
    }

    if(collision(bigEspresso) && !cupSet && coffee.spawn && espressoMade) {
      bigEspresso.frame = 11;
      frame = 9;
    }
  }

  if(recipes) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      recipes = false;
    }
  }

  //enter zoomed screens, main screen interactions
  if(!espresso && !syrup && !fridge && !freezer) {
    //espresso
    if (collision(espressoMachine)) {
      espresso = true;
    }
    //syrups
    else if (collision(caramelSyrup) || collision(vanillaSyrup) || collision(mochaSyrup) || collision(bsSyrup)) {
      syrup = true;
    }
    //cold cup
    else if (collision(cups1)) {
      coffee.spawn = true;
      // console.log("cold cup");
    }
    //hot cups
    else if (collision(cups2)) {
      coffee.spawn = true;
      // console.log("hot cup");
    }
    //freezer
    else if (collision(smallFreezer)) {
      freezer = true;
    }
    //fridge
    else if (collision(smallFridge)) {
      fridge = true;
    }
    //trash
    else if (collision(trash) && !cupSet && coffee.spawn) {
      coffee.trashed = true;
      trash.frame = 1;
      console.log("pressed trash");
      setTimeout(()=>{
        coffee.trashed = false;
        coffee.spawn = false;
        coffee.ice = false;
        frame = 0;
        trash.frame = 0;
      }, 500)
      }

    //set cup down
    if(collision(cupDown) && coffee.spawn && !coffee.trashed){ 
      if(!cupSet){
        cupSet = true;
      }
      else {cupSet = false;}
    }
    }

    //recipes
    if ((mouseX >= 700 && mouseX <= 890) && (mouseY >= 10 && mouseY <= 90) && !recipes) { 
      recipes = true;
    }
}

function backButton () {
  fill("yellow");
  rect(75, 125, 130, 50)

  fill(0,0,0, 127);
  if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
    rect(75, 125, 130, 50); 
  }
}

function orderNote () {
  noStroke();
  fill(255, 244, 179);
  rect(135, noteY, 250, 220);

  fill("black");
  if(order1) {
    text("iced caramel latte", 135, noteY-50); 
  }

  if(order2) {
    text("cup of milk", 135, noteY);
  }

  if(order3) {
    text("cup of milk", 135, noteY+50);
  }
  if((mouseX >= 10 && mouseX <=260)&&(mouseY >= 565 && mouseY <=600))
  {
    if(noteY >= 495) {
      noteY -= 20;
    }
  }
  else {
    if(noteY <= 655) {
      noteY += 20;
    }
  } 
}

function collision (Item) {
  if ((mouseX >= (Item.x - (Item.w/2)) && mouseX <= (Item.x + (Item.w/2))) && (mouseY >= (Item.y - (Item.h/2)) && mouseY <= (Item.y + (Item.h/2)))) {
    return true;
  }
  else {return false;}
}