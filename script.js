console.log("Welcome to Tic Tac Toc");
var audioTurn = new Audio("audios/swip-0.wav");
var music = new Audio("audios/clockmMusic.wav");
var gameover = new Audio("audios/gameOver.wav");
var turn ="X";
var isgameover = false;

//function to change the turn

const changeTurn = function(){
    return turn ==="X"?"0": "X"
}

//function to check for a win
const whoWin = function () {

    var boxtext = document.getElementsByClassName('boxtext');
    var wins = [
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px'
            document.querySelector('.line').style.width = "28vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            
        }
    })
}

//Game logic
// music.play();
var boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(function(elements){
    var boxtext = elements.querySelector(".boxtext");
    elements.addEventListener('click', function(){
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            
            whoWin();

            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }
           
        }
    })
})



//Add onclick listener to reset button

reset.addEventListener('click', function(){
    var boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(elements => {
        elements.innerText = ""
    });

    turn = "X";
    // isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
    document.querySelector('.line').style.width = "0vw";
});
