let Boxes = document.querySelectorAll(".box");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#newBtn");
let resetBtn = document.querySelector("#resetBtn");

let trunO = true;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


Boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(trunO){
            box.classList.add("o");
            box.classList.remove("x");
            box.innerText = "O";
            trunO = false;
        }else{
            box.classList.add("x");
            box.classList.remove("o");
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;

        count++

        let iswinner = checkWinner();

    if(count === 9 && !iswinner){
        msgContainer.classList.remove("hide");
        msg.innerHTML = "It's a draw!";

    }
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = Boxes[pattern[0]].innerText;
        let pos2Val = Boxes[pattern[1]].innerText;
        let pos3Val = Boxes[pattern[2]].innerText;

        if(pos1Val!= "" && pos2Val!= "" && pos3Val!= ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            return true;
        }
    }
    }
}
const showWinner = (winner) => {
    disableBox();
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}`;
}
const disableBox = () => {
    for(box of Boxes){
        box.disabled=true;
    }
}
const newGame = () => {
    msgContainer.classList.add("hide");
    trunO = true;
    count = 0;
    for (box of Boxes){
        box.innerText = "";
        box.disabled = false;
    }
}
newBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);
