//-------------------------START GAME---------------------------------------

// function to put pieces to starting position
piecesToStartingPosition = () => {
    for ( let i = 0; i < chessboard.length; i++ ) {
        $('#grid')
            .find('#' + chessboard[i].square)
            .css('background-image', 'url(' + chessboard[i].image + ')');
    }
}


// functions on start of game
startGame = () => {
    piecesToStartingPosition();
}

