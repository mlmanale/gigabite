let gameStart = true;
let espresso = false;
let syrup = false;
let fridge = false;
let freezer = false;
let recipes = false;

function preload() {
  //anims and sprites will go here!
}

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  // if(gameStart) {
  //   fill("black");
  //   text("Press enter to begin!", width/2, height/2);
  // }


  if(!espresso && !syrup && !fridge && !freezer && !recipes) {
    background("gray");
    
    fill("white");
    rect(450, 225, 900, 250)
  
    //HUD/gui
    fill("yellow");
    rect(185, 50, 350, 80);
    rect(795, 50, 190, 80);
  
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
    rect(560, 252.5, 50, 165);
    rect(620, 252.5, 50, 165);
    rect(680, 252.5, 50, 165);
    rect(740, 252.5, 50, 165);
  
    //cups
    rect(810, 267.5, 50, 135);
    rect(865, 262.5, 50, 145);
  
    //frige and freezer
    fill("purple");
    rect(375,500, 250, 200);
    rect(625, 500, 250, 200);
  
    //trash
    fill("gray");
    rect(825, 525, 100, 150);
  
    //note
    fill("yellow");
    rect(135, 495, 250, 220);
      
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
      else if ((mouseX >= 700 && mouseX <= 890) && (mouseY >= 10 && mouseY <= 90)) {
        rect(795, 50, 190, 80);
      }
    pop();
  }
  
  //ESPRESSO
  if (espresso) {
    background("gray");

    fill("yellow");
    //gui/hud
    rect(185, 50, 350, 80);
    rect(795, 50, 190, 80);
    
    //counter
    fill(0,255,0);
    rect(450, 500, 900, 150);

    //counter edge
    fill("green");
    rect(450, 587.5, 900, 25);

    //espresso machine x2
    fill("red");
    rect(450, 350, 600, 400);

    //back button
    fill("yellow");
    rect(75, 125, 130, 50);

    //note
    rect(135, 495, 250, 220);

    push();
    fill(0,0,0, 127);
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      rect(75, 125, 130, 50); 
    }
    pop();

  }

  //SYRUP
  if (syrup) {
    background("gray");
    
    fill("yellow");
    //gui/hud
    rect(185, 50, 350, 80);
    rect(795, 50, 190, 80);
    

    //back button
    rect(75, 125, 130, 50);

    //counter
    fill(0,255,0);
    rect(450, 500, 900, 150);

    //counter edge
    fill("green");
    rect(450, 587.5, 900, 25);

    //syrups - original size x2.5
    fill("red");
    rect(225, 340, 125, 412.5);
    rect(375, 340, 125, 412.5);
    rect(525, 340, 125, 412.5);
    rect(675, 340, 125, 412.5);
    
    //note
    fill("yellow");
    rect(135, 495, 250, 220);

    push();
      fill(0,0,0, 127);
      if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
        rect(75, 125, 130, 50); 
      }
    pop();

  } //END SYRUP
  
  if(freezer) {
    background("gray");
    
    fill("yellow");
    //gui/hud
    rect(185, 50, 350, 80);
    rect(795, 50, 190, 80);
    
    fill("purple");
    //freezer original x2.5
    rect(312.5, 375, 625, 500);
    //fridge edge
    rect(762.5, 375, 275, 500);


    //back button
    fill("yellow");
    rect(75, 125, 130, 50)

    //note
    rect(135, 495, 250, 220);


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
    
    fill("yellow");
    //gui/hud
    rect(185, 50, 350, 80);
    rect(795, 50, 190, 80);

    fill("purple");
    //fridge original x2.5
    rect(587.5, 375, 625, 500);
    //freezer edge
    rect(137.5, 375, 275, 500);

    //back button
    fill("yellow");
    rect(75, 125, 130, 50)

    //note
    rect(135, 495, 250, 220);
    push();
      fill(0,0,0, 127);
      if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
        rect(75, 125, 130, 50); 
      }
    pop();
  } //END FREEZER

}

function keyPressed() {
  if(keyCode === ENTER && gameStart) {
      console.log("gamestart works");
      gameStart = false;
  }
}

function mousePressed() {
  //grinder
  if(!espresso && !syrup && !fridge && !freezer && !recipes) {
    
    //espresso
    if ((mouseX >= 210 && mouseX <= 510) && (mouseY >= 135 && mouseY <= 335)) {
      espresso = true;
    }
    //syrups
    else if ((mouseX >= 535 && mouseX <= 765) && (mouseY >= 170 && mouseY <= 335)) {
      syrup = true;
      console.log("syrup");
    }
    // //cold cup
    // else if ((mouseX >= 785 && mouseX <= 835) && (mouseY >= 200 && mouseY <= 335)) {
    //   
    // }
    // //hot cups
    // else if ((mouseX >= 840 && mouseX <= 890) && (mouseY >= 190 && mouseY <= 335)) {
    //   
    // }
    //freezer
    else if ((mouseX >= 260 && mouseX < 500) && (mouseY >= 400 && mouseY <= 600)) {
      freezer = true;
    }
    //fridge
    else if ((mouseX >= 500 && mouseX <= 750) && (mouseY >= 400 && mouseY <= 600)) {
      fridge = true;
    }
    //trash
    // else if ((mouseX >= 775 && mouseX <= 875) && (mouseY >= 450 && mouseY <= 600)) {
    
    // }
    //recipes
    // else if ((mouseX >= 700 && mouseX <= 890) && (mouseY >= 10 && mouseY <= 90)) { 
    // }
  }
  //back buttons
  if(syrup) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      syrup = false;
    }
  }
  
  if(freezer) {
    if ((mouseX >= 10 && mouseX <= 140) && (mouseY >= 100 && mouseY <= 150)) {
      freezer = false;
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
}


