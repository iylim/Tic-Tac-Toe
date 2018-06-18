/*----- constants -----*/
var winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
];

/*----- app's state (variables) -----*/
var turn = []; 
var game = {
player: "",
moves: 1;
} 
/*----- cached element references -----*/


/*----- event listeners -----*/
document.querySelector('table').addEventListener('click', function(evt) {
var turn = evt.target.textContent;

switch () {
    case p1:
        if (tile === "X" || tile === "O") {
        return;
        } 
        return "X";
        turn.push();
        break;

    case p2:
        if (tile === "X" || tile === "O") {
        return;
        };
        return "O";
        turn.push();
        break;
    }
    render();
});

document.querySelector('button').addEventListener('click', function() {
document.querySelector("tile").value = "";
});

/*----- functions -----*/
function turn() {
turn = p1;
}

function render() {
    tile.textContent = "X" || "O";
    }

    