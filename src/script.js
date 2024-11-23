const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const restartButton = document.getElementById('restart-button');
const scoreDisplay = document.getElementById('score');

canvas.width = 400;
canvas.height = 400;

const box = 20;
let snake = [{ x: 8 * box, y: 10 * box }];
let food = { x: Math.floor(Math.random() * 19) * box, y: Math.floor(Math.random() * 19) * box };
let direction = null;
let score = 0;
let gameInterval;

document.addEventListener('keydown', changeDirection);
restartButton.addEventListener('click', restartGame);

function changeDirection(event) {
    const key = event.keyCode;
    if (key === 37 && direction !== "DIREITA") direction = "ESQUERDA";
    if (key === 38 && direction !== "BAIXO") direction = "CIMA";
    if (key === 39 && direction !== "ESQUERDA") direction = "DIREITA";
    if (key === 40 && direction !== "CIMA") direction = "BAIXO";
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha a cobra
    for (let s of snake) {
        ctx.fillStyle = "#27ae60";
        ctx.fillRect(s.x, s.y, box, box);
        ctx.strokeStyle = "#145a32";
        ctx.strokeRect(s.x, s.y, box, box);
    }

    // Desenha a comida
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.arc(food.x + box / 2, food.y + box / 2, box / 2, 0, 2 * Math.PI);
    ctx.fill();

    // Movimento da cabeça
    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === "ESQUERDA") headX -= box;
    if (direction === "CIMA") headY -= box;
    if (direction === "DIREITA") headX += box;
    if (direction === "BAIXO") headY += box;

    // Verifica se comeu a comida
    if (headX === food.x && headY === food.y) {
        food = { x: Math.floor(Math.random() * 19) * box, y: Math.floor(Math.random() * 19) * box };
        score++;
        scoreDisplay.textContent = score;
    } else {
        snake.pop();
    }

    // Verifica colisões
    const newHead = { x: headX, y: headY };
    if (
        headX < 0 ||
        headY < 0 ||
        headX >= canvas.width ||
        headY >= canvas.height ||
        snake.some(s => s.x === headX && s.y === headY)
    ) {
        clearInterval(gameInterval);
        alert("Fim de jogo! Sua pontuação: " + score);
        return;
    }

    snake.unshift(newHead);
}

function restartGame() {
    clearInterval(gameInterval);
    snake = [{ x: 8 * box, y: 10 * box }];
    food = { x: Math.floor(Math.random() * 19) * box, y: Math.floor(Math.random() * 19) * box };
    direction = null;
    score = 0;
    scoreDisplay.textContent = score;
    gameInterval = setInterval(drawGame, 150);
}

// Inicia o jogo
restartGame();
