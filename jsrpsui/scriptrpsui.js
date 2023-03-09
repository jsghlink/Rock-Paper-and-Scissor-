// bubbling, capturing event from img to div/ Div upwards. Boyo speak.
// declare functions and variables outside? check
let pselect;
let array;
// let compSelect;
let compVal;
let pCounter = 0;
let compCounter = 0;

let pspan = document.getElementById("pscore");
let cpuspan = document.getElementById("cpusore");

pspan.textContent = 0;
cpuspan.textContent = 0;

let rockimage = document.getElementById("playeroneimage");

function changekarImage(rockimage) {
  rockimage.src = player.png;
}

let rockimagecpu = document.getElementById("cpuimage");

function changekarImageCPU(rockimagecpu) {
  rockimagecpu.src = "cpuplayer.png";
}

let rockclick = document.getElementsByClassName("item1");

rockclick.addEventListener("click", myFunco);

function myFunco() {

    pselect === "ROCK";
    // transmit clicked weapon per round
    // update player score (both) first
    array = ["ROCK", "PAPER", "SCISSOR"];

    let compSelect = function (array) {
      return array[Math.floor(Math.random()*array.length)];
    };

    let compVal = compSelect(array);

    changekarImage(rockimage);
        changekarImageCPU(rockimagecpu);




    

    
    // update CPU weapon choice diplay here, perhaps
    // span score area mein increment karna hai. initial span = 0, span = span + 1.
    // dispResult ke jagah updateScore.

    function dispResult(pSelect, compVal) {
        if (pSelect.toUpperCase() === "ROCK" && compVal === "ROCK") {
        console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);//display this message in new div
        //pCounter = pCounter + 0;
        //compCounter = compCouter + 0;
        changekarImage(rockimage);
        changekarImageCPU(rockimagecpu);
        pspan.textContent = pspan.textContent + 0;
        cpuspan.textContent = cpuspan.textContent + 0;
        }
  
        else if (pSelect.toUpperCase() === "ROCK" && compVal === "PAPER") {
        compCounter = compCounter + 1;
        console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
        changekarImage(rockimage);
        pspan.textContent = pspan.textContent + 1;

        }
  
        else if (pSelect.toUpperCase() === "ROCK" && compVal === "SCISSOR") {
          pCounter = pCounter + 1;
          console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
        }
  
        else if (pSelect.toUpperCase() === "PAPER" && compVal === "PAPER") {
          console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
        }
  
        else if (pSelect.toUpperCase() === "PAPER" && compVal === "ROCK") {
          pCounter = pCounter + 1;
        console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s PAPER engulfs CPU's ROCK!\n`);
        }
  
        else if (pSelect.toUpperCase() === "PAPER" && compVal === "SCISSOR") {
          compCounter = compCounter + 1;
          console.log(`${compCounter} - ${pCounter} to the CPU! CPU's SCISSOR rips through ${playerName1}'s PAPER!`);
        }
        
        else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "SCISSOR") {
          console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
        }
  
        else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "PAPER")  {
          pCounter = pCounter + 1;
          console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s SCISSOR shreds CPU's PAPER!\n`);
        }
  
        else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "ROCK") {
          compCounter = compCounter + 1;
          console.log(`${compCounter} - ${pCounter} to the CPU! CPU's ROCK smashes ${playerName1}'s SCISSOR!\n`);
        }
      }
  
      dispResult(pSelect, compVal);
}

// The code below worked
// (// look for innerHTML
// pic path in "" in img.src

rockclickbutton = document.getElementById("rockweapon");
rockclickbutton.addEventListener("click", testFunc);

rockweapondisplay = document.getElementById("rockweaponimage");
//document.getElementById("playeroneimage");

//function changeImageTo () {
  //document.getElementById("playeroneimage").src
//}
let updatecpuscoreid = document.getElementById("cpuscoreid");
updatecpuscoreid.innerText = 0;
let cpucounter = 0;
function testFunc() {
  console.log("Welcome to ROCK, PAPER and SCISSORS!\n");
console.log("You'll be playing against the mighty CPU.\n");
console.log("Let's get acquainted first...\n");

let playerName1 = prompt("Enter your name here...\n", "Player One");

console.log(`Ahh...Welcome to the game ${playerName1}.\n`);
console.log("You plan on a winner take all...So be it...\n");
    console.log(`${playerName1}, enter your weapon of choice.\n`);
    
    let pSelect = prompt("Enter 'ROCK', 'PAPER' or 'SCISSOR'.\n");

    // add checking condition(s) here

    console.log(`Ye fine yeoman ${playerName1}, you have decided to go with ${pSelect.toUpperCase()}!\n`);
    console.log("Time for the CPU to decide on its weapon...\n");

    let array = ["ROCK", "PAPER", "SCISSOR"];

    let compSelect = function (array) {
      return array[Math.floor(Math.random()*array.length)];
    };

    let compVal = compSelect(array);

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    updatecpuscoreid.innerText = cpucounter + 1234;
}