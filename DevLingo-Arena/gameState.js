// Variáveis internas do módulo
let score = 0;
let lives = 3;

// Adiciona pontos
function addPoints(points) {
    score += points;
}

// Remove uma vida
function loseLife() {
    lives--;
}

// Retorna pontuação atual
function getScore() {
    return score;
}

// Retorna vidas atuais
function getLives() {
    return lives;
}

// Reinicia o jogo
function resetGame() {
    score = 0;
    lives = 3;
}

// Exportamos as funções
module.exports = {
    addPoints,
    loseLife,
    getScore,
    getLives,
    resetGame
};