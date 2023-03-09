console.log("Welcome to ROCK, PAPER and SCISSORS!\n");
console.log("You'll be playing against the mighty CPU.\n");
console.log("Let's get acquainted first...\n");

let playerName1 = prompt("Enter your name here...\n", "Player One");

console.log(`Ahh...Welcome to the game ${playerName1}.\n`);
console.log("Select game mode now...\n");

let number = prompt("Press '1' to play a quick round. Press '2' for a best-of-three.\n");
let pCounter = 0;
let compCounter = 0;

switch (number) {
    
    case '1': 
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

    //let pCounter = 0;
    //let compCounter = 0;

    function dispResult(pSelect, compVal) {
      if (pSelect.toUpperCase() === "ROCK" && compVal === "ROCK") {
      console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
      }

      else if (pSelect.toUpperCase() === "ROCK" && compVal === "PAPER") {
      compCounter = compCounter + 1;
      console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
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

    // console.log(random_item(items));
    // let ggg = prompt("Just enter something\n");
    // pcounter, cpucounter;
    // call function
    // if
    // begin again fucntion if same choices
    // console.log(`${compVal} has been selected by CPU.`);

    break;
  
    case '2':
    console.log("A three round skirmish awaits...");
    //console.log(`${playerName1}, enter your weapon of choice.\n`);
    
    //let plSelect = prompt("Enter 'ROCK', 'PAPER' or 'SCISSOR'.\n");

   // console.log(`Ye fine yeoman ${playerName1}, you have decided to go with ${plSelect}!\n`);
   // console.log("Time for the CPU to decide on its weapon...\n");
   //  let arraytwo = ["ROCK", "PAPER", "SCISSOR"];

   // let compuSelect = function (arraytwo) {
   // return arraytwo[Math.floor(Math.random()*arraytwo.length)];
   //};

   //let compuVal = compuSelect(arraytwo);

   //console.log(`CPU has chosen to call upon ${compuVal}!\n`);

    let plCounter = 0;
    let compuCounter = 0;

    function bOf3() {
      //while (pCounter === 2 || compCounter === 2) {
        for (let i=1;i<=3;i++) {

    console.log(`${playerName1}, enter your weapon of choice.\n`);
    
    let plSelect = prompt("Enter 'ROCK', 'PAPER' or 'SCISSOR'.\n");

    console.log(`Ye fine yeoman ${playerName1}, you have decided to go with ${plSelect.toUpperCase()}!\n`);
    console.log("Time for the CPU to decide on its weapon...\n");

    let arraytwo = ["ROCK", "PAPER", "SCISSOR"];

    let compuSelect = function (arraytwo) {
      return arraytwo[Math.floor(Math.random()*arraytwo.length)];
    };

    let compuVal = compuSelect(arraytwo);

    console.log(`CPU has chosen to call upon ${compuVal}!\n`);
          dispResult(plSelect.toUpperCase(),compuVal);
          if (pCounter === 2) {
            console.log(`The three round duel ends in the favour of ${playerName1} to the score of ${pCounter} - ${compCounter}!`);
            break;
          }
          //threepeat
          if (compCounter === 2) {
            console.log(`The three round duel ends in the favour of the CPU to the score of ${compCounter} - ${pCounter}!`);
            break;
          }

          //if (pCounter === compCounter) {
            //console.log(`It's as if these two are Dumbledore and Grindelwald reincarnated!\nThe match ends in a tie.\n${playerName1} ${pCounter} - ${compCounter} CPU.\n`);
            //break;
          //}

          
        }
        
      //}
      
    }
    
    bOf3();

    if (pCounter === 1 && compCounter === 1) {
      console.log(`It's as if these two are Dumbledore and Grindelwald reincarnated!\nThe match ends in a tie.\n${playerName1} ${pCounter} - ${compCounter} CPU.\n`);
      break;
    }

    if (pCounter === 1 && compCounter === 0) {
      console.log(`The three round duel ends narrowly in the favour of ${playerName1} to the score of ${pCounter} - ${compCounter}!`);
      break;
    }
    //threepeat
    if (compCounter === 1 && pCounter === 0) {
      console.log(`The three round duel ends narrowly in the favour of the CPU to the score of ${compCounter} - ${pCounter}!`);
      break;
    }
    break;

  default:
    console.log("Make sure to select the correct value. Press '1' to play a quick round. Press '2' for a best-of-three.");
    break;
}

// used {} in case '1'.