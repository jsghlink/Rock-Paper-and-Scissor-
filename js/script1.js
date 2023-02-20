let array = ["ROCK", "PAPER", "SCISSOR"];

let compSelect = function (array) {
      return array[Math.floor(Math.random()*array.length)];
};

let pCounter = 0;
let compCounter = 0;

function dispResult(pSelect, compVal) {
    if (pSelect === "ROCK" && compVal === "ROCK") {
    console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
    }

    else if (pSelect === "ROCK" && compVal === "PAPER") {
    compCounter = compCounter + 1;
    console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
    }

    else if (pSelect === "ROCK" && compVal === "SCISSOR") {
      pCounter = pCounter + 1;
      console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
    }

    else if (pSelect === "PAPER" && compVal === "PAPER") {
      console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
    }

    else if (pSelect === "PAPER" && compVal === "ROCK") {
      pCounter = pCounter + 1;
    console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s PAPER engulfs CPU's ROCK!\n`);
    }

    else if (pSelect === "PAPER" && compVal === "SCISSOR") {
      compCounter = compCounter + 1;
      console.log(`${compCounter} - ${pCounter} to the CPU! CPU's SCISSOR rips through ${playerName1}'s PAPER!`);
    }
    
    else if (pSelect === "SCISSOR" && compVal === "SCISSOR") {
      console.log(`Goddamnit! It's a tie! Score remains ${pCounter} - ${compCounter}. Care to tempt fate again?\n`);
    }

    else if (pSelect === "SCISSOR" && compVal === "PAPER")  {
      pCounter = pCounter + 1;
      console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s SCISSOR shreds CPU's PAPER!\n`);
    }

    else if (pSelect === "SCISSOR" && compVal === "ROCK") {
      compCounter = compCounter + 1;
      console.log(`${compCounter} - ${pCounter} to the CPU! CPU's ROCK smashes ${playerName1}'s SCISSOR!\n`);
    }
  }
  

