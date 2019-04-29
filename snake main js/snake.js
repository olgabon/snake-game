let snake2 = [
    {x: 10, y: 300},
    {x: 10, y: 300},
    {x: 10, y: 300},
    {x: 10, y: 300}
];

let newDx = 10;
let newDy = 0;
let score2 = 0;

let twoPlayers = document.getElementById('twoPlayers')
twoPlayers.addEventListener('click', getTwoPlayers)

twoPlayers.addEventListener('click', getTwoPlayers)
document.getElementById("twoPlayers")
        .addEventListener("click", function() {
  document.getElementById("secondScore").hidden = true;
  document.getElementById("secondScore").hidden = false;
}, false);

function getTwoPlayers() {
    if (gameOver()) return;
    setTimeout(function onTick() {
    changingDirection = false;
      clearCanvas();
      drawSnakeFood ();
      advanceSnake();
      drawSnake();
      drawSecondSnake ();
      secondAdvanceSnake ();
      getTwoPlayers();
    }, 100)
}

function drawSecondSnake () {
    snake2.forEach(drawSecondSnakePart);
}

function drawSecondSnakePart (snakePart) {
   ctx.fillStyle = 'green';
   ctx.strokeStyle = 'darkgreen';
   ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
   ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function secondAdvanceSnake () {
    const head = {x: snake2[0].x + newDx, y: snake2[0].y + newDy}
    snake2.unshift(head);
    const didEatFood = snake2[0].x === foodX && snake2[0].y === foodY;
    if (didEatFood) {
        score2 +=10;
        document.getElementById('score2').innerHTML = score2;
        createFood();
    } else {
        snake2.pop()
    }
}

function changeSecondDirection (event) {
    const left_arrow1 = 65;
    const right_arrow1 = 68;
    const up_arrow1 = 87;
    const down_arrow1 = 83;

    const left_arrow = 37;
    const right_arrow = 39;
    const up_arrow = 38;
    const down_arrow = 40;

    if (changingDirection) return;

    changingDirection = true;

    const keyPressed = event.keyCode;
    const directionUp1 = newDy === -10;
    const directionDown1 = newDy === 10;
    const directionLeft1 = newDx === -10;      
    const directionRight1 = newDx === 10;

    const directionUp = dy === -10;
    const directionDown = dy === 10;
    const directionLeft = dx === -10;      
    const directionRight = dx === 10;

    if (keyPressed === left_arrow1 && !directionRight1) {
        newDx = -10;
        newDy = 0
    } 
    if (keyPressed === right_arrow1 && !directionLeft1) {
        newDx = 10;
        newDy = 0;
    }
    if (keyPressed === up_arrow1 && !directionDown1) {
        newDx = 0;
        newDy = -10;
    }
    if (keyPressed === down_arrow1 && !directionUp1) {
        newDx = 0;
        newDy = 10;
    }
    if (keyPressed === left_arrow && !directionRight) {
        dx = -10;
        dy = 0
    } 
    if (keyPressed === right_arrow && !directionLeft) {
        dx = 10;
        dy = 0;
    }
    if (keyPressed === up_arrow && !directionDown) {
        dx = 0;
        dy = -10;
    }
    if (keyPressed === down_arrow && !directionUp) {
        dx = 0;
        dy = 10;
    }
}


function gameOver() {
    for (let i=4; i<snake2.length; i++) {
        const didCollide = snake2[i].x === snake2[0].x && 
                           snake2[i].y === snake2[0].y 
        if (didCollide) return true
    }

    for (let i=4; i<snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && 
                           snake[i].y === snake[0].y 
        if (didCollide) return true
    }

    const hitLeftBorder1 = snake2[0].x < 0 
    const hitRightBorder1 = snake2[0].x > canvas.width - 10;
    const hitTopBorder1 = snake2[0].y < 0;
    const hitBottomBorder1 = snake2[0].y > canvas.height - 10;

    const hitLeftBorder = snake[0].x < 0 
    const hitRightBorder = snake[0].x > canvas.width - 10;
    const hitTopBorder = snake[0].y < 0;
    const hitBottomBorder = snake[0].y > canvas.height - 10;

    return hitLeftBorder || hitRightBorder || hitTopBorder || hitBottomBorder || 
            hitLeftBorder1 || hitRightBorder1 || hitTopBorder1 || hitBottomBorder1
}