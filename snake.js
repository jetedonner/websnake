
      var snakePos = new Point(0, 0);
      var snakeDir = DIR.DOWN;

      var paused = false;
      var gameOver = false;

      function draw() {
        if (canvas.getContext) {
          
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, boardSize, boardSize);
          ctx.fillStyle = COLORS.RED;
          ctx.fillRect((boardSize / 2) - (snakeSize / 2) + (snakePos.x * snakeSize), (boardSize / 2) - (snakeSize / 2) + (snakePos.y * snakeSize), snakeSize, snakeSize);

          ctx.fillStyle = COLORS.BLUE;
          ctx.beginPath();
          ctx.arc(100 - (snakeSize / 2), 75 - (snakeSize / 2), (snakeSize / 2), 0, 2 * Math.PI);
          ctx.fill();
          if(paused) {
            drawText(ctx, "PAUSE", "30px Arial");
          } else if(gameOver) {
            drawText(ctx, "GAME OVER", "30px Arial", COLORS.RED);
          }
        }
      }

      function gameTick() {
        if(!paused && !gameOver) { 
          switch(snakeDir) {
            case DIR.DOWN:
              snakePos.y += 1;
              break;
            case DIR.UP:
              snakePos.y -= 1;
              break;
            case DIR.RIGHT:
              snakePos.x += 1;
              break;
            case DIR.LEFT:
              snakePos.x -= 1;
              break;
          }
        }
        draw();
      }