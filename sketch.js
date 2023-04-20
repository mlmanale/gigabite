let gameStart = true;

function setup() {
  createCanvas(900, 600);
  textAlign(CENTER);
}

function draw() {
  background(220);
  if(gameStart) {
    fill("black");
    text("Press enter to begin!", width/2, height/2);
  }

  if(!gameStart) {
    fill("black");
    textSize(30);
    text("GigaBite Cafe", width/2, 140);
    
    textSize(20);

  }
}

function keyPressed() {
  if(keyCode === ENTER && gameStart) {
      console.log("gamestart works");
      gameStart = false;
  }
}


