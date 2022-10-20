var txtLog = document.getElementById("txtLog");

function log(msg) {
  txtLog.value += msg + '\r\n';
  txtLog.scrollTop = txtLog.scrollHeight;
}

function drawText(ctx, txt, font, fillStyle = COLORS.BLUE) {
  ctx.fillStyle = fillStyle;
  ctx.font = font;
  var  w = ctx.measureText(txt).width;
  var  h = 30;
  ctx.fillText(txt, (boardSize / 2) - (w / 2), (boardSize / 2)/* - (h / 2)*/);
}

function changeDir(newDir) {
  if(newDir != snakeDir) {
    if((snakeDir == DIR.LEFT && newDir != DIR.RIGHT) ||
        (snakeDir == DIR.RIGHT && newDir != DIR.LEFT) ||
        (snakeDir == DIR.UP && newDir != DIR.DOWN) ||
        (snakeDir == DIR.DOWN && newDir != DIR.UP)
      ){
      snakeDir = newDir;
      return true;  
    }
  }
  return false;
}