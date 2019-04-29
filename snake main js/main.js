var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
document.addEventListener ("keydown", changeSecondDirection);
document.addEventListener ("keydown", changeDirection);

let snake = [
    {x: 10, y: 150},
    {x: 10, y: 150},
    {x: 10, y: 150},
    {x: 10, y: 150}
];

let stones = [
    {x: 100, y: 50},
    {x: 100, y: 60},
    {x: 100, y: 70},
    {x: 100, y: 80},
    {x: 200, y: 100},
    {x: 200, y: 110},
    {x: 200, y: 120},
    {x: 200, y: 130},
    {x: 300, y: 200},
    {x: 300, y: 210},
    {x: 300, y: 220},
    {x: 300, y: 230},
    {x: 150, y: 300},
    {x: 150, y: 310},
    {x: 150, y: 320},
    {x: 150, y: 330}
];

let extraStones = [
    {x: 200, y: 100},
    {x: 200, y: 110},
    {x: 200, y: 120},
    {x: 200, y: 130}
];

let moreStones = [    
    {x: 300, y: 200},
    {x: 300, y: 210},
    {x: 300, y: 220},
    {x: 300, y: 230}
];

let lastExtraStone = [
    {x: 150, y: 300},
    {x: 150, y: 310},
    {x: 150, y: 320},
    {x: 150, y: 330}
];

let dx = 10;
let dy = 0;

let foodX;
let foodY;

let score = 0;

let stoneX = stones[0].x;
let stoneY = stones[0].y

let speed = 0;

createFood()

let beginButton = document.getElementById('begin')
beginButton.addEventListener('click', main);

beginButton.addEventListener('click', main)

document.getElementById("begin")
        .addEventListener("click", function() {
  document.getElementById("secondScore").hidden = false;
  document.getElementById("secondScore").hidden = true;
}, false);

function main() {
    if (gameEnded()) return;
    setTimeout(function onTick() {
    changingDirection = false;
      clearCanvas();
      drawSnakeFood ()
      advanceSnake();
      drawSnake();
      drawAllStones ();
      main();
    }, 200)
}

let levelButton = document.getElementById('middle')
levelButton.addEventListener('click', middleLevel);

levelButton.addEventListener('click', middleLevel)

document.getElementById("middle")
        .addEventListener("click", function() {
  document.getElementById("secondScore").hidden = false;
  document.getElementById("secondScore").hidden = true;
}, false);


function middleLevel() {
    if (gameEnded()) return;
    setTimeout(function onTick() {
    changingDirection = false;
      clearCanvas();
      drawSnakeFood ()
      advanceSnake();
      drawSnake();
      drawAllStones ();
      middleLevel();
    }, 100)
}

let seniorButton = document.getElementById('senior')
seniorButton.addEventListener('click', levelsenior);

seniorButton.addEventListener('click', seniorButton)

document.getElementById("senior")
        .addEventListener("click", function() {
  document.getElementById("secondScore").hidden = false;
  document.getElementById("secondScore").hidden = true;
}, false);

function levelsenior() {
    if (gameEnded()) return;
    setTimeout(function onTick() {
    changingDirection = false;
      clearCanvas();
      drawSnakeFood ()
      advanceSnake();
      drawSnake();
      drawAllStones ();
      levelsenior()
    }, 80)  
}

function clearCanvas () {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
}

function drawSnake () {
    snake.forEach(drawSnakePart);
}

function drawSnakePart (snakePart) {
   ctx.fillStyle = 'orange';
   ctx.strokeStyle = 'darkred';
   ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
   ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function advanceSnake () {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy}
    snake.unshift(head);
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        score +=10;
        document.getElementById('score').innerHTML = score;
        createFood();
    } else {
        snake.pop()
    }
}

function drawAllStones () {
    drawStone ();
    drawMoreStone ();
    drawExtraStone ();
    drawLastExtraStone ()
}
function drawStone () {
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'darkpurple';
    ctx.fillRect(stoneX, stoneY, 10, 40);
    ctx.strokeRect(stoneX, stoneY, 10, 40);
};
function drawMoreStone () {
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'darkpurple';
    ctx.fillRect(moreStones[0].x, moreStones[0].y, 10, 40);
    ctx.strokeRect(moreStones[0].x, moreStones[0].y, 10, 40);
};

function drawExtraStone () {
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'darkpurple';
    ctx.fillRect(extraStones[0].x, extraStones[0].y, 10, 40);
    ctx.strokeRect(extraStones[0].x, extraStones[0].y, 10, 40);
};

function drawLastExtraStone () {
    ctx.fillStyle = 'purple';
    ctx.strokeStyle = 'darkpurple';
    ctx.fillRect(lastExtraStone[0].x, lastExtraStone[0].y, 10, 40);
    ctx.strokeRect(lastExtraStone[0].x, lastExtraStone[0].y, 10, 40);
};

function changeDirection (event) {
    event.preventDefault();
    const left_arrow = 37;
    const right_arrow = 39;
    const up_arrow = 38;
    const down_arrow = 40;

    if (changingDirection) return;

    changingDirection = true;

    const keyPressed = event.keyCode;
    const directionUp = dy === -10;
    const directionDown = dy === 10;
    const directionLeft = dx === -10;      
    const directionRight = dx === 10;

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

function getRandomTen(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function createFood() {
 foodX = getRandomTen (0, canvas.width - 10);
 foodY = getRandomTen (0, canvas.height - 10);

 snake.forEach(function isFoodOnSnake(part) {
     const foodIsOnSnake = part.x == foodX && part.y == foodY;
     if (foodIsOnSnake) createFood();
 })
 snake.forEach(function isFoodOnStone (){
     const foodOnStone = stones[0].x == foodX && stones[0].y == foodY;
     if (foodOnStone) createFood()
 })
}

function drawSnakeFood () {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
 };

function gameEnded() {
    for (let i=4; i<snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && 
                           snake[i].y === snake[0].y 
                           
        if (didCollide) 
            return true

    }
    const hitLeftBorder = snake[0].x < 0 
    const hitRightBorder = snake[0].x > canvas.width - 10;
    const hitTopBorder = snake[0].y < 0;
    const hitBottomBorder = snake[0].y > canvas.height - 10;
    let hitWall = false
    for(let i = 0; i < stones.length; i++) {
        if(snake[0].x === stones[i].x && snake[0].y === stones[i].y) {
            
            hitWall = true
            break
            
        }
    }

    return hitLeftBorder || hitWall || hitRightBorder || hitTopBorder || hitBottomBorder
}



