let player1 = "X";
let player2 = "O";

let p1Score = 0
let p2Score = ''

let currentTurn = 1;
let movesMade = 0;
let sqr = $(".square");
let reset = $("#resetButton")


$(document).ready(function () {


            reset.click(function () {
                reset.css("display", "block");
                p1Score += p1Score
                p2Score += p2Score

            });







            sqr.one("click", function (e) {
                movesMade++
                if (currentTurn % 2 === 1) {
                    event.target.innerHTML = player1;
                    event.target.style.color = "red";

                    currentTurn++;

                } else {
                    event.target.innerHTML = player2;
                    event.target.style.color = "blue";
                    currentTurn--;
                }
                if (checkForWinner()) {
                    winner = currentTurn == 1 ? player2 : player1;
                    declareWinner(winner)
                };

            })

            function declareWinner(winner) {
                let p1Score = 0;
                let p2Score = 0;
                console.log("inside winner function")
                winner = winner === player1 ? 'player1 wins' + p1Score++ : player2 + "player2 wins" + p2Score++;
                alert(winner)

                $('#player1Score').val(p1Score)
                $('#player2Score').val(p2Score)
                p1Score += p1Score
                p2Score += p2Score



            }

            function checkForWinner() {
                reset.on("click", (e) => {
                    let moves = Array.prototype.slice.call($(".square"));
                    moves.map((m) => {
                        m.innerHTML = "";
                    });
                    if (movesMade > 4) {
                        let square = $(".square");
                        let moves = Array.prototype.slice.call($(".square"));
                        let results = moves.map(function (square) {
                            return square.innerHTML;
                        });
                    }
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
                            return true;
                        } else {
                            return false;
                        }
                    });
                })
            }
        })
    

  