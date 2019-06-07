var Model = {

    chessboard: [],

    activePiece: '',

    pieceTypes: [{
            color: 'white',
            type: 'pawn',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/800px-Chess_plt45.svg.png',
        },
        {
            color: 'white',
            type: 'rook',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/68px-Chess_rlt45.svg.png'
        },
        {
            color: 'white',
            type: 'knight',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/68px-Chess_nlt45.svg.png'
        },
        {
            color: 'white',
            type: 'bishop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/68px-Chess_blt45.svg.png'
        },
        {
            color: 'white',
            type: 'queen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/68px-Chess_qlt45.svg.png'
        },
        {
            color: 'white',
            type: 'king',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/68px-Chess_klt45.svg.png'
        },
        {
            color: 'black',
            type: 'pawn',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/800px-Chess_pdt45.svg.png'
        },
        {
            color: 'black',
            type: 'rook',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/68px-Chess_rdt45.svg.png'
        },
        {
            color: 'black',
            type: 'knight',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/68px-Chess_ndt45.svg.png'
        },
        {
            color: 'black',
            type: 'bishop',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/68px-Chess_bdt45.svg.png'
        },
        {
            color: 'black',
            type: 'queen',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/68px-Chess_qdt45.svg.png'
        },
        {
            color: 'black',
            type: 'king',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/68px-Chess_kdt45.svg.png'
        }
    ],

    gameStatus: {
        toPlay: 'white',
        gameStarted: false,
        pieceIsActive: false,

    },

    move: {
        startSquare: '',
        endSquare: '',
    }
}