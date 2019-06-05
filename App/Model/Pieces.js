//---------------------------------------PIECES-----------------------------------------
// piece constructor function
function Piece(type, player, image, square) {
    this.type = type;
    this.player = player;
    this.image = image;
    this.square = square;
}

// construct all pieces
var pieces = {
    constructPiecesMethod() {
        piecesArray = [];
        pushPiece = (type, player, image, square) => {
            piecesArray.push(new Piece(type, player, image, square))
        }

        // pawns
        for(let i = 97; i < 105; i++){
            pushPiece( 'pawn', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/800px-Chess_plt45.svg.png',  String.fromCharCode(i) + 2);
            pushPiece( 'pawn', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/800px-Chess_pdt45.svg.png', String.fromCharCode(i) + 7);
        }
        // rooks
        pushPiece('rook', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png', 'a1' );
        pushPiece('rook', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png', 'h1' );
        pushPiece('rook', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png', 'a8' );
        pushPiece('rook', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png', 'h8' );
        // knights
        pushPiece('knight', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png', 'b1' );
        pushPiece('knight', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png', 'g1' );
        pushPiece('knight', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png', 'b8' );
        pushPiece('knight', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png', 'g8' );
        // bishops
        pushPiece('bishop', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png', 'c1' );
        pushPiece('bishop', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png', 'f1' );
        pushPiece('bishop', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png', 'c8' );
        pushPiece('bishop', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png', 'f8' );
        // queens
        pushPiece('queen', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png', 'd1' );
        pushPiece('queen', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png', 'd8' );
        // kings
        pushPiece('king', 'white', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png', 'e1' );
        pushPiece('king', 'black', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png', 'e8' );

    return piecesArray;
    }
}

var chessboard = pieces.constructPiecesMethod();


var move = {
    startSquare: '',
    endSquare: ''
}








/*
    pieceTypes: [
        {
            player: 'white',
            type: 'pawn',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/800px-Chess_plt45.svg.png',
        },
        {
            player: 'white',
            type: 'rook',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png'
        },
        {
            player: 'white',
            type: 'knight',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png'
        },
        {
            player: 'white',
            type: 'bishop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png'
        },
        {
            player: 'white',
            type: 'queen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png'
        },
        {
            player: 'white',
            type: 'king',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png'
        },
        {
            player: 'black',
            type: 'pawn',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/800px-Chess_pdt45.svg.png'
        },
        {
            player: 'black',
            type: 'rook',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png'
        },
        {
            player: 'black',
            type: 'knight',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png'
        },
        {
            player: 'black',
            type: 'bishop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png'
        },
        {
            player: 'black',
            type: 'queen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png'
        },
        {
            player: 'black',
            type: 'king',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png'
        }
    ],
    */









