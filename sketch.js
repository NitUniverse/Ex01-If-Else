let LeftY = 85;
let RightY = 620;
let BallX = 1025;
let BallY = 620;
let phase = 1;
let bg = 1

function setup() {
  createCanvas(1100, 700);
}


function draw(){
  if (bg > 1){bg = 0}
  if (bg === 1){
    background('black');
  } else {
    background('white');
  }
  //draw players
  noStroke();
  if (bg === 1){
    fill('white');
  } else {
    fill('black');
  }
  quad(50,(LeftY-45),60,(LeftY-45),60,(LeftY+44),50,(LeftY+44));
  quad(1040,(RightY-45),1050,(RightY-45),1050,(RightY+44),1040,(RightY+44));
  //draw ball
  circle(BallX,BallY,30);

  //move ball
  if (phase===1){
    if (BallX>85){BallX = BallX-7;}
    if (BallY>85){BallY = BallY-4;}
  }
  if (phase===2){
  if (BallX<1025){BallX = BallX+7;}
  }
  if (phase===3){
  if (BallX>85){BallX = BallX-7;}
  if (BallY<620){BallY = BallY+4;}
  }
  if (phase===4){
  if (BallX<1025){BallX = BallX+7;}
  }

  //move players
  if (phase===1){
    if (LeftY>85){LeftY = LeftY-(535/30)}
    if (RightY<620){RightY = RightY+(535/30)}
  }
  if (phase===2){
    if (LeftY<620){LeftY = LeftY+(535/30)}
    if (RightY>85){RightY = RightY-(535/30)}
  }
  if (phase===3){
    if (LeftY<620){LeftY = LeftY+(535/30)}
    if (RightY>85){RightY = RightY-(535/30)}
  }
  if (phase===4){
    if (LeftY>85){LeftY = LeftY-(535/30)}
    if (RightY<620){RightY = RightY+(535/30)}
  }

  //switch phase
  if (phase===1){
    if (BallX<=85)
      if(BallY<=85){
        phase = 2
        bg = bg + 1
      };
  }
  if (phase===2){
    if (BallX>=1025){
      phase = 3
      bg = bg + 1
    };
  }
  if (phase===3){
    if (BallX<=85)
      if(BallY>=620){
        phase = 4
        bg = bg + 1
      };
  }
    if (phase===4){
    if (BallX>=1025){
      phase = 1
      bg = bg + 1
    };
  }
}

function windowResized() {
  resizeCanvas(1100, 700);
}
