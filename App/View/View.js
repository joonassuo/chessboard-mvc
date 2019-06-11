//-----------------------------RENDER EMPTY BOARD--------------------------------
var View = {
    chessBoard: {
        column: 97,
        row: 8,
        rowStart: 'even',
        elementCount: 0,

        // method for generating empty board
        gridCreationMethod() {
            for (let i = 0; i < 64; i++) {
                const square = document.createElement("div");

                if (this.elementCount === 8) {

                    if (this.rowStart === 'even') {
                        this.rowStart = 'odd';
                    } else {
                        this.rowStart = 'even';
                    }
                    this.elementCount = 0;
                    this.row--;
                    this.column = 97;
                }
                square.setAttribute("class", this.rowStart);
                square.setAttribute("id", String.fromCharCode(this.column) + this.row);
                document.getElementById("grid").appendChild(square);
                this.elementCount++;
                this.column++;
            }
        }
    }
}


window.onload = () => {
    View.chessBoard.gridCreationMethod();
};


$('#startButton').click(() => {
    if (!Model.gameStatus.gameStarted) {
        Controller.startGameMethod();
        Controller.renderPiecesMethod();
    }
});


$('#resetButton').click(() => {
    Controller.startGameMethod();
    Controller.clearBoard();
    Controller.renderPiecesMethod();
})


$('div').on('click', 'div', () => {
    Controller.makeMoveMethod();
});



