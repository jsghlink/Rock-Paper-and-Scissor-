// look for innerHTML
// pic path in "" in img.src
// use /*...*/ and ctrl+/ - boyo speaks

rockclickbutton = document.getElementById("rockweapon"); // clicking on rock button, image inside
paperclickbutton = document.getElementById("paperweapon");
scissorclickbutton = document.getElementById("scissorweapon");

rockclickbutton.addEventListener("click", testFunc);
paperclickbutton.addEventListener("click", testFunc2);
scissorclickbutton.addEventListener("click", testFunc3);

rockweapondisplay = document.getElementById("rockweaponimage"); //  rock image
//document.getElementById("playeroneimage");

//function changeImageTo () {
  //document.getElementById("playeroneimage").src
//}
let updatecpuscoreid = document.getElementById("cpuscoreid");  // cpu span
updatecpuscoreid.innerText = 0;
let updateplayerscoreid = document.getElementById("playerscoreid"); // player span
updateplayerscoreid.innerText = 0;
let cpucounter = 0; // cpu counter for score
let pcounter = 0; // player counter for score
function testFunc() { // what happens on the click
  // while (pcounter !=5) {

//   console.log("Welcome to ROCK, PAPER and SCISSORS!\n");
// console.log("You'll be playing against the mighty CPU.\n");
// console.log("Let's get acquainted first...\n");

// let playerName1 = prompt("Enter your name here...\n", "Player One");

// console.log(`Ahh...Welcome to the game ${playerName1}.\n`);
// console.log("You plan on a winner take all...So be it...\n");
//     console.log(`${playerName1}, enter your weapon of choice.\n`);
    
    let pSelect = "ROCK";

    // add checking condition(s) here

    // console.log(`Ye fine yeoman ${playerName1}, you have decided to go with ${pSelect.toUpperCase()}!\n`);
    // console.log("Time for the CPU to decide on its weapon...\n");

    let array = ["ROCK", "PAPER", "SCISSOR"];

    let compSelect = function (array) {
      return array[Math.floor(Math.random()*array.length)];
    };

    let compVal = compSelect(array);

    if (pSelect.toUpperCase() === "ROCK" && compVal === "ROCK") {
      // console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
      document.getElementById("playeroneimage").src = "rock.png";
      document.getElementById("cpuimage").src = "rock.png";
      updatecpuscoreid.innerText = cpucounter + 0;
      updateplayerscoreid.innerText = pcounter + 0;

      }

      else if (pSelect.toUpperCase() === "ROCK" && compVal === "PAPER") {
      // compCounter = compCounter + 1;
      // console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
      document.getElementById("playeroneimage").src = "rock.png";
      document.getElementById("cpuimage").src = "paper.png";
      updatecpuscoreid.innerText = cpucounter + 1;
      updateplayerscoreid.innerText = pcounter + 0;
      }

      else if (pSelect.toUpperCase() === "ROCK" && compVal === "SCISSOR") {
        // pCounter = pCounter + 1;
        // console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
        document.getElementById("playeroneimage").src = "rock.png";
      document.getElementById("cpuimage").src = "scissor.png";
      updatecpuscoreid.innerText = cpucounter + 0;
      updateplayerscoreid.innerText = pcounter + 1;
      }

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    //document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    //updatecpuscoreid.innerText = cpucounter + 1234;
  // }
}

function testFunc2() {
  let pSelect = "PAPER";

    // add checking condition(s) here

    // console.log(`Ye fine yeoman ${playerName1}, you have decided to go with ${pSelect.toUpperCase()}!\n`);
    // console.log("Time for the CPU to decide on its weapon...\n");

    let array = ["ROCK", "PAPER", "SCISSOR"];

    let compSelect = function (array) {
      return array[Math.floor(Math.random()*array.length)];
    };

    let compVal = compSelect(array);

    if (pSelect.toUpperCase() === "PAPER" && compVal === "PAPER") {
      // console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
      document.getElementById("playeroneimage").src = "paper.png";
      document.getElementById("cpuimage").src = "paper.png";
      updatecpuscoreid.innerText = cpucounter + 0;
      updateplayerscoreid.innerText = pcounter + 0;

      }

      else if (pSelect.toUpperCase() === "PAPER" && compVal === "ROCK") {
      // compCounter = compCounter + 1;
      // console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
      document.getElementById("playeroneimage").src = "paper.png";
      document.getElementById("cpuimage").src = "rock.png";
      updatecpuscoreid.innerText = cpucounter + 0;
      updateplayerscoreid.innerText = pcounter + 1;
      }

      else if (pSelect.toUpperCase() === "PAPER" && compVal === "SCISSOR") {
        // pCounter = pCounter + 1;
        // console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
        document.getElementById("playeroneimage").src = "paper.png";
      document.getElementById("cpuimage").src = "scissor.png";
      updatecpuscoreid.innerText = cpucounter + 1;
      updateplayerscoreid.innerText = pcounter + 0;
      }

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    //document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    //updatecpuscoreid.innerText = cpucounter + 1234;
  // }
}

function testFunc3() {
  let pSelect = "SCISSOR";

    // add checking condition(s) here

    // console.log(`Ye fine yeoman ${playerName1}, you have decided to go with ${pSelect.toUpperCase()}!\n`);
    // console.log("Time for the CPU to decide on its weapon...\n");

    let array = ["ROCK", "PAPER", "SCISSOR"];

    let compSelect = function (array) {
      return array[Math.floor(Math.random()*array.length)];
    };

    let compVal = compSelect(array);

    if (pSelect.toUpperCase() === "SCISSOR" && compVal === "SCISSOR") {
      // console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
      document.getElementById("playeroneimage").src = "scissor.png";
      document.getElementById("cpuimage").src = "scissor.png";
      updatecpuscoreid.innerText = cpucounter + 0;
      updateplayerscoreid.innerText = pcounter + 0;

      }

      else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "PAPER") {
      // compCounter = compCounter + 1;
      // console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
      document.getElementById("playeroneimage").src = "scissor.png";
      document.getElementById("cpuimage").src = "paper.png";
      updatecpuscoreid.innerText = cpucounter + 0;
      updateplayerscoreid.innerText = pcounter + 1;
      }

      else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "ROCK") {
        // pCounter = pCounter + 1;
        // console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
        document.getElementById("playeroneimage").src = "scissor.png";
      document.getElementById("cpuimage").src = "rock.png";
      updatecpuscoreid.innerText = cpucounter + 1;
      updateplayerscoreid.innerText = pcounter + 0;
      }

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    //document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    //updatecpuscoreid.innerText = cpucounter + 1234;
  // }
}