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
        Model.chessboard = [];
        // generate all pieces in starting positions and push to model
        // ALL PAWNS
        for (let i = 97; i < 105; i++) {
            this.generatePieceMethod('white', 'pawn', String.fromCharCode(i) + 2);
            this.generatePieceMethod('black', 'pawn', String.fromCharCode(i) + 7);
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



    clearBoard() {
        $('div > div').css('background-image', '');
        $('div > div').css('background-color', '');
    },



    renderPiecesMethod() {
        const array = Model.chessboard;
        this.clearBoard();
        array.forEach((element) => {
            $('#grid').find('#' + element.square).css('background-image', 'url(' + element.image + ')');
        });
        Model.gameStatus.gameStarted = true;
    },



    isLegal() {
        var type = Model.activePiece.type.toLowerCase();
        var deltaX = Math.abs(Model.move.endSquare.x - Model.move.startSquare.x);
        var deltaY = Math.abs(Model.move.endSquare.y - Model.move.startSquare.y);

        // check if move is legal according to piece rules
        switch (type) {
            case 'pawn' :
                if (deltaX === 0 && deltaY === 1) {
                    return true;
                }
                break;
            case 'rook':
                if (deltaX > 0 && deltaY === 0 || deltaX === 0 && deltaY > 0) {
                    return true;
                }
                break;
            case 'knight' :
                if (deltaX === 1 && deltaY === 2 || deltaX === 2 && deltaY === 1) {
                    return true;
                };
                break;
            case 'bishop':
                if (deltaX === deltaY) {
                    return true;
                }
                break;
            case 'queen':
                if (deltaX > 0 && deltaY === 0 || deltaX === 0 && deltaY > 0 || deltaX === deltaY) {
                    return true;
                }
                break;
            case 'king':
                if (deltaX === 1 && deltaY === 0 || deltaX === 0 && deltaY === 1) {
                    return true;
                }
                break;
        }




    },



    makeMoveMethod() {

        var isActive = Model.gameStatus.pieceIsActive;

        const getCoordinates = () => {
            return {
                x: event.target.id.charCodeAt(0) - 96,
                y: parseInt(event.target.id.charAt(1))
            }
        }

        const toggleTurn = () => {
            if (Model.gameStatus.toPlay === 'White') {
                Model.gameStatus.toPlay = 'Black';
            } else {
                Model.gameStatus.toPlay = 'White';
            }
            document.getElementById('turnIndicator').innerHTML = 'To Play: ' + Model.gameStatus.toPlay;
        }

        if (!isActive) {
            this.getPieceMethod();

            // check if there is a piece, make sure only one can be active
            if (event.target.style.cssText !== '' && Model.activePiece.color.toLowerCase() === Model.gameStatus.toPlay.toLowerCase()) {
                $(event.target).css('background-color', 'green');
                Model.gameStatus.pieceIsActive = true;
                Model.move.startSquare = getCoordinates();
            }
        } else {
            if (event.target.style.cssText === '') {
                Model.move.endSquare = getCoordinates();

                // check if move is legal, then:
                if (this.isLegal()) {
                    Model.gameStatus.pieceIsActive = false;
                    Model.chessboard.find(o => o.square === Model.activePiece.square).square = event.target.id;
                    this.renderPiecesMethod();
                    toggleTurn();

                    console.log(Model.move);
                }
            }
        }
    },



    // USELESS?
    getPieceMethod() {
        Model.activePiece = Model.chessboard.find(o => o.square === event.target.id);
        console.log('Active piece is: ' + Model.activePiece.color + ' ' + Model.activePiece.type);
    }

}