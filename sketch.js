let gameStart = true;

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

  //if(!gameStart) {
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
    
    //grinder
    fill("red");
    rect(65, 235, 100, 200);

    //espresso machine
    rect(335, 245, 270, 180);

    //syrups
    rect(545, 252.5, 50, 165);
    rect(605, 252.5, 50, 165);
    rect(665, 252.5, 50, 165);
    rect(725, 252.5, 50, 165);

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

}

function keyPressed() {
  if(keyCode === ENTER && gameStart) {
      console.log("gamestart works");
      gameStart = false;
  }
}


