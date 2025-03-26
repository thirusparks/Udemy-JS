function gameStart() {
    var diceOne = '';
    var diceTwo = '';
    
    var firstThrow = Math.floor((Math.random()*6)+1);
    var secondThrow = Math.floor((Math.random()*6)+1);
    var firstDiceTurn = ("./images/dice"+firstThrow+".png");
    var secondDiceTurn = ("./images/dice"+secondThrow+".png");
    
    diceOne = document.querySelector('.img1').setAttribute('src',firstDiceTurn);
    diceTwo = document.querySelector('.img2').setAttribute('src',secondDiceTurn);
    
    
    if(firstThrow === secondThrow) {
        document.querySelector('h1').innerHTML = "Draw";
    } else if (firstThrow > secondThrow) {
        document.querySelector('h1').innerHTML = "Player 1 wins";
    } else if (firstThrow < secondThrow) {
        document.querySelector('h1').innerHTML = "Player 2 wins";
    }
}

