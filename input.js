document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
  var keyCode = e.keyCode;
  
  if(keyCode == 37 || keyCode == 65) {
    if(changeDir(DIR.LEFT)) {
      log("Dir: LEFT");
    }
  } else if(keyCode == 38 || keyCode == 87) {;
    if(changeDir(DIR.UP)) {
      log("Dir: UP");
    }
  } else if(keyCode == 39 || keyCode == 68) {
    if(changeDir(DIR.RIGHT)) {
      log("Dir: RIGHT");
    }
  } else if(keyCode == 40 || keyCode == 83) {
    if(changeDir(DIR.DOWN)) {
      log("Dir: DOWN");
    }
  } else if(keyCode == 32 || keyCode == 27) {
    paused = !paused;
    log("Pause: " + paused);
  } else if(keyCode == 81) {
    gameOver = !gameOver;
    log("GameOver: " + gameOver);
  } else if(keyCode == 82) {
    restartSnake();
    log("Restart...");
  } else {
    log("KeyPressed: " + keyCode);
  }
}

document.addEventListener('swiped-left',function(e){
    if(changeDir(DIR.LEFT)) {
      log("Dir: LEFT");
    }
    e.preventDefault();
});
document.addEventListener('swiped-right',function(e){
    if(changeDir(DIR.RIGHT)) {
      log("Dir: RIGHT");
    }
    e.preventDefault();
});
document.addEventListener('swiped-up',function(e){
    if(changeDir(DIR.UP)) {
      log("Dir: UP");
    }
    e.preventDefault();
});
document.addEventListener('swiped-down',function(e){
    if(changeDir(DIR.DOWN)) {
      log("Dir: DOWN");
    }
    e.preventDefault();
});

function restartSnake(){
  snakeDir = DIR.DOWN;
  snakePos.x = 0;
  snakePos.y = 0;
  gameOver = false;
  paused = false;
}