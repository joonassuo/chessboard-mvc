
// piece constructor function
function Piece(type, player) {
    this.type = type;
    this.player = player;
}

// construct all pieces
var pieces = {

    pieceTypes: ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'rook', 'rook', 'knight', 'knight', 'bishop', 'bishop', 'queen', 'king'],

    constructPiecesMethod() {
        piecesArray = [];
        pushPiece = (index, color) => {
            piecesArray.push(new Piece(this.pieceTypes[index], color))
        }

        // black pieces
        for(let i = 0; i < this.pieceTypes.length; i++) {
            pushPiece(i, 'black');
        }
        // white pieces
        for(let i = 0; i < this.pieceTypes.length; i++) {
            pushPiece(i, 'white');
        }
    return piecesArray;
    }
}



// 







