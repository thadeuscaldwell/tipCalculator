let player1 = "X";
let player2 = "O";

let p1Score=0
let p2Score=''

let currentTurn = 1;
let movesMade = 0;
let sqr = $(".square");



$(document).ready(function () {


    $("#resetButton").click(function() {
        location.reload();
      });







    sqr.one("click", function (e) {
    movesMade++
        if (currentTurn % 2===1) {
            event.target.innerHTML = player1;
            event.target.style.color = "red";

            currentTurn++;
            console.log(currentTurn)

        } else {
            event.target.innerHTML = player2;
            event.target.style.color = "blue";
            currentTurn--;
            console.log("player2")
        }
            if(checkForWinner()){
                winner = currentTurn == 1 ? player2 : player1;
                declareWinner(winner)
            };
        
    })

    function declareWinner(winner){
        let p1Score = 0;
        let p2Score = 0;
        console.log("inside winner function")
winner = winner === player1 ? 'player1 wins' + p1Score++: player2 + "player2 wins" + p2Score++;
alert(winner)

$('#player1Score').val(p1Score)
$('#player2Score').val(p2Score)
p1Score +=p1Score
p2Score+=p2Score

//work on reset function
//work on the scoring

    }

            function checkForWinner() {
               
                if (movesMade > 4) {
                    let square = $(".square");
                    let moves = Array.prototype.slice.call($(".square"));
                    let results = moves.map(function (square) { return square.innerHTML; });

                            let Win = [
                                [0, 1, 2],
                                [3, 4, 5],
                                [6, 7, 8],
                                [0, 3, 6],
                                [1, 4, 7],
                                [2, 5, 8],
                                [0, 4, 8],
                                [2, 4, 6]
                            ];
                            return Win.find(function (combo) {
                        
                                if (results[combo[0]] !== '' && results[combo[1]] !== '' && [combo[2]] !== '' && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                                    console.log("inside function")
                                    return true;
                                } else {
                                    return false;
                                }
                            })
                        }
                    }
                    

                   





                })