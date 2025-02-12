const boardSize = 4;
let board = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    addTile();
    addTile();
    updateBoard();
});

document.addEventListener("keydown", (e) => {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        let moved = false;
        if (e.key === "ArrowUp") moved = moveUp();
        if (e.key === "ArrowDown") moved = moveDown();
        if (e.key === "ArrowLeft") moved = moveLeft();
        if (e.key === "ArrowRight") moved = moveRight();
        
        if (moved) {
            addTile();
            updateBoard();
            if (checkGameOver()) alert("Game Over!");
        }
    }
});

function updateBoard() {
    const boardElement = document.getElementById("game-board");
    boardElement.innerHTML = "";
    board.forEach(row => {
        row.forEach(value => {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            if (value) {
                tile.textContent = value;
                tile.setAttribute("data-value", value);
            }
            boardElement.appendChild(tile);
        });
    });
    document.getElementById("score").textContent = score;
}

function addTile() {
    let emptyCells = [];
    for (let r = 0; r < boardSize; r++)
        for (let c = 0; c < boardSize; c++)
            if (board[r][c] === 0) emptyCells.push({ r, c });

    if (emptyCells.length > 0) {
        let { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[r][c] = Math.random() < 0.9 ? 2 : 4;
    }
}

function slide(row) {
    let arr = row.filter(val => val);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            arr[i] *= 2;
            score += arr[i];
            arr[i + 1] = 0;
        }
    }
    return arr.filter(val => val).concat(Array(boardSize - arr.filter(val => val).length).fill(0));
}

function moveLeft() {
    let moved = false;
    for (let r = 0; r < boardSize; r++) {
        let newRow = slide(board[r]);
        if (JSON.stringify(board[r]) !== JSON.stringify(newRow)) moved = true;
        board[r] = newRow;
    }
    return moved;
}

function moveRight() {
    let moved = false;
    for (let r = 0; r < boardSize; r++) {
        let newRow = slide(board[r].reverse()).reverse();
        if (JSON.stringify(board[r]) !== JSON.stringify(newRow)) moved = true;
        board[r] = newRow;
    }
    return moved;
}

function moveUp() {
    let moved = false;
    for (let c = 0; c < boardSize; c++) {
        let col = [];
        for (let r = 0; r < boardSize; r++) col.push(board[r][c]);
        let newCol = slide(col);
        if (JSON.stringify(col) !== JSON.stringify(newCol)) moved = true;
        for (let r = 0; r < boardSize; r++) board[r][c] = newCol[r];
    }
    return moved;
}

function moveDown() {
    let moved = false;
    for (let c = 0; c < boardSize; c++) {
        let col = [];
        for (let r = 0; r < boardSize; r++) col.push(board[r][c]);
        let newCol = slide(col.reverse()).reverse();
        if (JSON.stringify(col) !== JSON.stringify(newCol)) moved = true;
        for (let r = 0; r < boardSize; r++) board[r][c] = newCol[r];
    }
    return moved;
}

function checkGameOver() {
    for (let r = 0; r < boardSize; r++)
        for (let c = 0; c < boardSize; c++)
            if (board[r][c] === 0) return false;
    
    for (let r = 0; r < boardSize - 1; r++)
        for (let c = 0; c < boardSize; c++)
            if (board[r][c] === board[r + 1][c]) return false;

    for (let c = 0; c < boardSize - 1; c++)
        for (let r = 0; r < boardSize; r++)
            if (board[r][c] === board[r][c + 1]) return false;

    return true;
}
