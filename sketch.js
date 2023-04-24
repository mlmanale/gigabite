let gameStart = true;

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
}

function draw() {
  background(220);
  // if(gameStart) {
  //   fill("black");
  //   text("Press enter to begin!", width/2, height/2);
  // }

  //if(!gameStart) {
    background("gray");

    //gui elements
    fill('yellow');
    rect(10, 10, 350, 80);
    rect(700, 10, 190, 80);
    //tiles
    fill("white");
    rect(0, 100, 900, 250);

    //counter
    fill(0,255,00);
    rect(0, 250, 900, 150);

    //counter edge
    fill("green");
    rect(0, 350, 900, 25);

    //bottom drawers
    fill("blue");
    rect(0, 375, 900, 250);
    fill("red");

    //interactive elements
    fill("red");
    //grinder
    rect(15, 135, 100, 200);
    //espresso machine
    rect(200, 155, 250, 180);
    //syrups
    rect(500, 140, 60, 195);
    rect(570, 140, 60, 195);
    rect(640, 140, 60, 195);
    rect(710, 140, 60, 195);
    //cups
    rect(785, 170, 50, 165);
    rect(840, 170, 50, 165);
    //fridge and freezer
    fill("purple");
    rect(250, 400, 250, 200);
    rect(500, 400, 250, 200);
    //trash
    fill("gray");
    
    //note
    fill("yellow");
    rect(10, 385, 250, 225);

  //}
}

function keyPressed() {
  if(keyCode === ENTER && gameStart) {
      console.log("gamestart works");
      gameStart = false;
  }
}


