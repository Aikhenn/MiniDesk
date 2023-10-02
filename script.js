const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); 

//calculator
function calc(){
    const num = document.getElementById("display");

    

    try{
        return eval(num.value);
    
    }
    catch(err){
        return "error";
    }

}


//todo
function addTask(){
    console.log("cfwa");
    if(inputBox.value === ''){
        alert("You must write something!");
    }     
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);     
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    };
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


//tic tac toe
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
let options = ["","","","","","","","",""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
};
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);

    checkWinner();
};
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer; 
};
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn `;
};
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++ ){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == ""  || cellB == "" || cellC == ""){
            continue;
        }

        if (cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
        
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;

    }   
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;

    }
    else{
        changePlayer();
    }

};

function restartGame(){
    currentPlayer = "X";
    options = ["","","","","","","","",""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
};


//Digital Clock

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();
   
    hrs.innerHTML = (currentTime.getHours()<10?"0": "") + currentTime.getHours();  
    min.innerHTML = (currentTime.getMinutes()<10?"0": "") + currentTime.getMinutes(); 
    sec.innerHTML = (currentTime.getSeconds()<10?"0": "") + currentTime.getSeconds(); 
    


},1000);

//dragfunction


var chooseElement;
var parent;
var origelem;

const move = function(element){
    const elements = document.querySelectorAll(".drag") 

    elements.forEach(element =>{
        element.addEventListener("mousedown", () => {
            parent = element.parentElement;
            parent.style.position = "absolute"
            chooseElement = parent
            origelem = element;
            console.log(origelem.offsetHeight);

            document.onmousemove = (e)=>{
                var x = e.pageX;
                var y = e.pageY;
            
                if(x < document.body.clientWidth || y>   document.body.clientHeight){
                    try{

                        chooseElement.style.left = x - (chooseElement.offsetWidth/2) + "px"; 
                        chooseElement.style.top = y - (origelem.offsetHeight) + "px"; 
                    
                        
                     }
                     catch(err){
                             console.log("nothing is selected");   
                     }

                }
          
               
            }

        })
    })
    document.onmouseup = function(e){
        chooseElement = null;
    }
}

//close function

//Todo
const Close = document.getElementById("close");
const ToDo = document.getElementById("ToDo");
const ToDoBtn = document.getElementById("ToDoBtn");

Close.addEventListener('click', ()=>{

    ToDo.classList.add('Inactive');
})

ToDoBtn.addEventListener('click', ()=>{
    console.log("open");
    ToDo.classList.remove('Inactive');
})
//Digital Clock
const CloseC = document.getElementById("closeC");
const DigitalClock = document.getElementById("Clock");
const ClockBtn = document.getElementById("ClockBtn");


CloseC.addEventListener('click', ()=>{

    DigitalClock.classList.add('Inactive');
})

ClockBtn.addEventListener('click', ()=>{
    console.log("open");
    DigitalClock.classList.remove('Inactive');
})
//Calculator

const CloseCal = document.getElementById("closeCal");
const calcu = document.getElementById("calculator");
const CalcBtn = document.getElementById("CalcBtn");

CloseCal.addEventListener('click', ()=>{

    calcu.classList.add('Inactive');
})

CalcBtn.addEventListener('click', ()=>{
    console.log("open");
    calcu.classList.remove('Inactive');
})

//TicTacToe
const CloseT = document.getElementById("closeT");
const TicTac = document.getElementById("TicTacToe");
const TicTacBtn = document.getElementById("TicTacBtn");

CloseT.addEventListener('click', ()=>{

    TicTac.classList.add('Inactive');
})

TicTacBtn.addEventListener('click', ()=>{
    console.log("open");
    TicTac.classList.remove('Inactive');
})

//Notes
const CloseN = document.getElementById("closeN");
const Notes = document.getElementById("Notes");
const NotesBtn = document.getElementById("NotesBtn");

CloseN.addEventListener('click', ()=>{

    Notes.classList.add('Inactive');
})

NotesBtn.addEventListener('click', ()=>{
    console.log("open");
    Notes.classList.remove('Inactive');
})






