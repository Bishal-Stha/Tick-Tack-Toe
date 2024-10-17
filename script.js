let boxes =document.querySelectorAll(".box");
let reset =document.querySelector(".resetGame");
let message =document.querySelector(".message");
let turnO =true;
let winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
    if(turnO){
        box.innerText ="O";
        turnO =false;
    }
    else{
        box.innerText ="X";
        turnO =true;
    }
    box.disabled =true;
    checkWinner();
})
})
const checkWinner = ()=>{
    for (const pattern of winningConditions) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!="")
            {
            if(pos1===pos2 && pos2===pos3)
            {
                message.classList.remove("hide");
                message.innerText =`Congratulations Player-${pos1}, you've won the game.`;

            }
            
        }
    }
}

/*Logic For reset Button */
reset.addEventListener("click",
    ()=>{
        message.classList.add("hide");
        boxes.forEach((box)=>{
            box.innerText ="";
            box.disabled=false;
})});
