//-------------------------START GAME---------------------------------------


var Controller = {
    
    generatePieceMethod(color, type, square) {
        var piece = {
            color: color,
            type: type,
            image: Model.pieceTypes.find(o => o.color === color && o.type === type).image,
            square: square
        }
        Model.chessboard.push(piece);
    },


    startGameMethod() {
        // generate all pieces in starting positions and push to model
        // ALL PAWNS
        for(let i = 97; i < 105; i++){
            this.generatePieceMethod( 'white', 'pawn', String.fromCharCode(i) + 2);
            this.generatePieceMethod( 'black', 'pawn', String.fromCharCode(i) + 7);
        }
        // WHITE
        this.generatePieceMethod('white', 'rook', 'a1');
        this.generatePieceMethod('white', 'rook', 'h1');
        this.generatePieceMethod('white', 'knight', 'b1');
        this.generatePieceMethod('white', 'knight', 'g1');
        this.generatePieceMethod('white', 'bishop', 'c1');
        this.generatePieceMethod('white', 'bishop', 'f1');
        this.generatePieceMethod('white', 'queen', 'd1');
        this.generatePieceMethod('white', 'king', 'e1');
        // BLACK
        this.generatePieceMethod('black', 'rook', 'a8');
        this.generatePieceMethod('black', 'rook', 'h8');
        this.generatePieceMethod('black', 'knight', 'b8');
        this.generatePieceMethod('black', 'knight', 'g8');
        this.generatePieceMethod('black', 'bishop', 'c8');
        this.generatePieceMethod('black', 'bishop', 'f8');
        this.generatePieceMethod('black', 'queen', 'd8');
        this.generatePieceMethod('black', 'king', 'e8');
    },


    renderPiecesMethod() {
        const array = Model.chessboard.slice();
        
        array.forEach((element) => {   
            var img = document.createElement('img');         
            img.setAttribute('src', element.image);
            document.querySelector('#' + element.square).appendChild(img);
        });               
    }
}





