//gamestates
let gameStart = true;
let espresso = false;
let syrup = false;
let fridge = false;
let freezer = false;
let recipes = false;

//cup variables
let cupW = 50;
let cupH = 75;
let cupBigW = 125;
let cupBigH = 187.5;
let cupSet = false;


//syrup imgs
let caramel, vanilla, mocha, brownSugar;
//cold latte images
let cupimg, coldcup, icecup;
//cup with syrup spritesheet
let cupsheet;
let frame = 0;

//trash
let trashcan;
let trashframe = 0;

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
    fill("yellow");
    if(!this.ice) {
      cupimg = coldcup;
    }
    else if (this.ice){
      cupimg = icecup;
    }

    if(!espresso && !syrup && !fridge && !freezer && !recipes && !cupSet) {
      image(cupsheet, mouseX, mouseY, cupW, cupH, frame*150, 0, 150, 225 );
    }
    else if ((espresso || syrup || fridge || freezer) && !cupSet) {
      image(cupsheet, mouseX, mouseY, cupBigW, cupBigH, frame*150, 0, 150, 225);
    }
    if (!espresso && !syrup && !fridge && !freezer && !recipes && cupSet) {
      image(cupsheet, 155, 295, cupW, cupH, frame*150, 0, 150, 225 );
    }

  }

  update() {
    if (this.spawn && !this.trashed) {
      this.draw();
    }
  }
}

function preload() {
  //anims and sprites will go here!
  caramel = loadImage("img/caramelbig.png");
  vanilla = loadImage("img/vanillabig.png");
  mocha = loadImage("img/mochabig.png");
  brownSugar = loadImage("img/bsbig.png");
  coldcup = loadImage("img/cup.png");
  icecup = loadImage("img/cupice.png");
  cupsheet = loadImage("img/syrupcup.png");
  trashcan = loadImage("img/trashcan.png");
  coffee = new Cup();
}

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  
}

function draw() {
  background(220);
  // if(gameStart) {
  //   fill("black");
  //   text("Press enter to begin!", width/2, height/2);
  // }

  // if (mouseIsPressed) {
  //   console.log(mouseX, mouseY);
  // }
  
  if(!espresso && !syrup && !fridge && !freezer && !recipes) {
    background("gray");
    
    fill("white");
    rect(450, 225, 900, 250)
  
    //counter
    fill(0,255,0);
    rect(450, 325, 900, 150)
  
    //counter edge
    fill("green");
    rect(450, 362.5, 900, 25);
  
    //bottom drawers
    fill("blue");
    rect(450, 487.5, 900, 225);
  
    //interactive elements
    fill("red");
    //espresso machine
    rect(360, 235, 300, 200);
  
    //syrups
    image(caramel, 560, 252.5, 50, 165);
    image(vanilla, 620, 252.5, 50, 165);
    image(mocha, 680, 252.5, 50, 165);
    image(brownSugar, 740, 252.5, 50, 165);
  
    //cups
    fill("red");
    rect(810, 267.5, 50, 135);
    rect(865, 262.5, 50, 145);
  
    //frige and freezer
    fill("purple");
    rect(375,500, 250, 200);
    rect(625, 500, 250, 200);
  
    //trash
    image(trashcan, 825, 525, 100, 150, trashframe*100, 0, 100, 150);
  
    //note
    fill("yellow");
    rect(135, 495, 250, 220);

    //set cup down
    fill("gray");
    rect(155, 310, 80, 50);
      
    //mouse hover feature for interactive items
    push();
      fill(0, 0, 0, 127);
      //espresso
      if ((mouseX >= 210 && mouseX <= 510) && (mouseY >= 135 && mouseY <= 335)) {
        rect(360, 235, 300, 200);
      }
      //syrups
      else if ((mouseX >= 535 && mouseX <= 765) && (mouseY >= 170 && mouseY <= 335)) {
        rect(650, 252.5, 230, 165);
      }
      //cold cup
      else if ((mouseX >= 785 && mouseX <= 835) && (mouseY >= 200 && mouseY <= 335)) {
        rect(810, 267.5, 50, 135);
      }
      //hot cups
      else if ((mouseX >= 840 && mouseX <= 890) && (mouseY >= 190 && mouseY <= 335)) {
        rect(865, 262.5, 50, 145);
      }
      //freezer
      else if ((mouseX >= 260 && mouseX < 500) && (mouseY >= 400 && mouseY <= 600)) {
        rect(380,500, 240, 200);
      }
      //fridge
      else if ((mouseX >= 500 && mouseX <= 750) && (mouseY >= 400 && mouseY <= 600)) {
        rect(625, 500, 250, 200);
      }
      //trash
      else if ((mouseX >= 775 && mouseX <= 875) && (mouseY >= 450 && mouseY <= 600)) {
        rect(825, 525, 100, 150);
      }
      //recipes
      // else if ((mouseX >= 700 && mouseX <= 890) && (mouseY >= 10 && mouseY <= 90)) {
      //   rect(795, 50, 190, 80);
      // }

    pop();
    fill("white");
    text("cup", 810, 267.5);
    text("espresso", 360, 235);
    text("set cup down", 155, 310);

    if(mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  
  //counter for gamestates
  if (espresso || syrup) {
    background("gray");

    //counter
    fill(0,255,0);
    rect(450, 500, 900, 150);

    //counter edge
    fill("green");
    rect(450, 587.5, 900, 25);
  }
  
  //ESPRESSO
  if (espresso) {
    //espresso machine x2
    fill("red");
    rect(450, 350, 600, 400);

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
    fill("red");
    image(caramel, 225, 340, 125, 412.5);
    image(vanilla, 375, 340, 125, 412.5);
    image(mocha, 525, 340, 125, 412.5);
    image(brownSugar, 675, 340, 125, 412.5);
    
    push();
      fill(0,0,0, 127);
      if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
        rect(75, 125, 130, 50); 
      }
    pop();
    if(mouseIsPressed) {
      console.log(mouseX,mouseY);
    }
  } //END SYRUP
  
  if(freezer) {
    background("gray");
 
    fill("purple");
    //freezer original x2.5
    rect(312.5, 375, 625, 500);
    //fridge edge
    rect(762.5, 375, 275, 500);

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

    fill("purple");
    //fridge original x2.5
    rect(587.5, 375, 625, 500);
    //freezer edge
    rect(137.5, 375, 275, 500);

  } //END FREEZER

  //backbutton for gamestates
  if (espresso || syrup || fridge || freezer)
   {
      backButton();
      orderNote();
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

}

function keyPressed() {
  if(keyCode === ENTER && gameStart) {
      console.log("gamestart works");
      gameStart = false;
  }
}

function mousePressed() {
  //back buttons and zoomed screen interactions
  if(syrup) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      syrup = false;
    }

    //caramel
    if ((mouseX >= 162.5 && mouseX <= 287.5) && (mouseY >= 135 && mouseY <= 547.5) && coffee.spawn) {
      if(frame == 0) {
        frame = 1;
      }
      else if(frame == 1) {
        frame = 5;
      }
    }

    //vanilla
    if ((mouseX >= 312.5 && mouseX <= 437.5) && (mouseY >= 135 && mouseY <= 547.5) && coffee.spawn) {
      if(frame == 0) {
        frame = 4;
      }
      else if(frame == 4) {
        frame = 8;
      }
    }

    //mocha 
    if ((mouseX >= 462.5 && mouseX <= 587.5) && (mouseY >= 135 && mouseY <= 547.5) && coffee.spawn) {
      if(frame == 0) {
        frame = 3;
      }
      else if(frame == 3) {
        frame = 7;
      }
    }

    //brown sugar 
    if ((mouseX >= 612.5 && mouseX <= 737.5) && (mouseY >= 135 && mouseY <= 547.5) && coffee.spawn) {
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
    }
    if ((mouseX >=0 && mouseX <= 625) &&(mouseY >= 125 && mouseY <= 600)) {
        coffee.ice = true;
        console.log("test");
    }
  }

  if(fridge) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      fridge = false;
    }
  }

  if(espresso) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      espresso = false;
    }
  }

  if(recipes) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      recipes = false;
    }
  }

  //enter zoomed screens
  if(!espresso && !syrup && !fridge && !freezer) {
    //espresso
    if ((mouseX >= 210 && mouseX <= 510) && (mouseY >= 135 && mouseY <= 335)) {
      espresso = true;
    }
    //syrups
    else if ((mouseX >= 535 && mouseX <= 765) && (mouseY >= 170 && mouseY <= 335)) {
      syrup = true;
    }
    //cold cup
    else if ((mouseX >= 785 && mouseX <= 835) && (mouseY >= 200 && mouseY <= 335)) {
      coffee.spawn = true;
      console.log("cold cup");
    }
    //hot cups
    else if ((mouseX >= 840 && mouseX <= 890) && (mouseY >= 190 && mouseY <= 335)) {
      coffee.spawn = true;
      console.log("hot cup");
    }
    //freezer
    else if ((mouseX >= 260 && mouseX < 500) && (mouseY >= 400 && mouseY <= 600)) {
      freezer = true;
    }
    //fridge
    else if ((mouseX >= 500 && mouseX <= 750) && (mouseY >= 400 && mouseY <= 600)) {
      fridge = true;
    }
    //trash
    else if ((mouseX >= 775 && mouseX <= 875) && (mouseY >= 450 && mouseY <= 600) && !cupSet && coffee.spawn) {
      coffee.trashed = true;
      trashframe = 1;
      console.log("pressed trash");
      setTimeout(()=>{
        coffee.trashed = false;
        coffee.spawn = false;
        coffee.ice = false;
        frame = 0;
        trashframe = 0;
      }, 500)
      }

    else if ((mouseX >= 115 && mouseX <= 195) && (mouseY >= 285 && mouseY <= 335) && coffee.spawn && !coffee.trashed) {
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
  fill("yellow");
  rect(135, noteY, 250, 220);
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