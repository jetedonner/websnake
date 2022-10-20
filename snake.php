<?php
  $boardSize = 510;
  $snakeSize = 10;
  $snakePosX = 0;
  $snakePosY = 0;
  
  $fieldsX = 40;
  $fieldsY = 40;

?>
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Canvas experiment</title>
    <link rel="stylesheet" href="snake.css">
    <script type="text/javascript" src="classes.js"></script>
    <script type="text/javascript" src="consts.js"></script>
    <script type="text/javascript" src="snake.js"></script>
    <script type="application/javascript">
      // const acl = new Accelerometer({
      // frequency: 60
      // });
      // acl.addEventListener("reading", () => { //console.log(`Acceleration along the X-axis ${acl.x}`); console.log(`Acceleration along the Y-axis ${acl.y}`); console.log(`Acceleration along the Z-axis ${acl.z}`); 
      // alert("acc3l");
      // });
      // acl.start();
    </script>
  </head>
  <body onload="draw();" style="touch-action: none">
    <canvas id="canvas" width="<?= $boardSize ?>" height="<?= $boardSize ?>"></canvas>
    <br/>
    <strong>Dbg-Log:</strong><br/>
    <textarea rows="6" cols="49" id="txtLog" name="txtLog"></textarea>
  </body>
  <script src="swiped-events.js" />
  <script data-consolejs-channel="fd6e8357-8025-677e-9d4e-f48fb8d85672" src="https://remotejs.com/agent/agent.js"></script>
  <script type="text/javascript" src="input.js"></script>
  <script type="text/javascript" src="utils.js"></script>
  <script type="text/javascript">
    const canvas = document.getElementById("canvas");
    setInterval(gameTick, 250);
  </script>
</html>