// look for innerHTML
// pic path in "" in img.src
// use /*...*/ and ctrl+/ - boyo speaks
// update counter first, then assign to .innerText
// changes 4,5 in notes only on rock click
// check Player Score: display - done in a different way
// credits mention kar dena jo bhi elements borrow kiye ho net se
// images etc path question ask boyo
let rockaudio = new Audio("rocksound.mp3");
let paperaudio = new Audio("papersound.mp3");
let scissoraudio = new Audio("scissorsound.mp3");
let tieaudio = new Audio("tiesound.mp3");
let pwinaudio = new Audio("pwin.mp3");
let cpuwinaudio = new Audio("cpuwin.mp3");
let introaudio = new Audio("intro.mp3");

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  // introaudio.autoplay();
  introaudio.play();
  //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
});

document.body.addEventListener("click", (event) => {
  console.log("audio to be paused");
  // introaudio.autoplay();
  introaudio.pause();
  //introaudio.autoplay() = true;  // firefox ka autoplay band kar dena baad mein chump!!!
}); 

// let playintroaudiosample = document.addEventListener("DOMContentLoaded", playFuncAudio);
// document.addEventListener('load', playFuncAudio);
// function playFuncAudio() {
//   introaudio.autoplay();
// }

let bravesoul = prompt("Enter your name here...\n", "Brave Soul");

let warriordisplay = document.getElementById("warriorname");
warriordisplay.innerText = `Welcome to the arena, ${bravesoul}!`;
let changeplayernamedisplay = document.getElementById("pboxid");
changeplayernamedisplay.innerText = `${bravesoul}'s Score : `;
battletextmessage = document.getElementById("battletext");




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

function pyroPlay() { // create canvas bhi ho sakta hai. Try karna ek baar.
  let max_fireworks = 5,
  max_sparks = 50;
let canvas = document.getElementById('pyro');
let context = canvas.getContext('2d');
let fireworks = [];
 
for (let i = 0; i < max_fireworks; i++) {
  let firework = {
    sparks: []
  };
  for (let n = 0; n < max_sparks; n++) {
    let spark = {
      vx: Math.random() * 5 + .5,
      vy: Math.random() * 5 + .5,
      weight: Math.random() * .3 + .03,
      red: Math.floor(Math.random() * 2),
      green: Math.floor(Math.random() * 2),
      blue: Math.floor(Math.random() * 2)
    };
    if (Math.random() > .5) spark.vx = -spark.vx;
    if (Math.random() > .5) spark.vy = -spark.vy;
    firework.sparks.push(spark);
  }
  fireworks.push(firework);
  resetFirework(firework);
}
window.requestAnimationFrame(explode);
 
function resetFirework(firework) {
  firework.x = Math.floor(Math.random() * canvas.width);
  firework.y = canvas.height;
  firework.age = 0;
  firework.phase = 'fly';
}
 
function explode() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework,index) => {
    if (firework.phase == 'explode') {
        firework.sparks.forEach((spark) => {
        for (let i = 0; i < 10; i++) {
          let trailAge = firework.age + i;
          let x = firework.x + spark.vx * trailAge;
          let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
          let fade = i * 20 - firework.age * 2;
          let r = Math.floor(spark.red * fade);
          let g = Math.floor(spark.green * fade);
          let b = Math.floor(spark.blue * fade);
          context.beginPath();
          context.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
          context.rect(x, y, 4, 4);
          context.fill();
        }
      });
      firework.age++;
      if (firework.age > 100 && Math.random() < .05) {
        resetFirework(firework);
      }
    } else {
      firework.y = firework.y - 10;
      for (let spark = 0; spark < 15; spark++) {
        context.beginPath();
        context.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
        context.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
        context.fill();
      }
      if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
    }
  });
  window.requestAnimationFrame(explode);
}
}
// function pyroPlayCpu() {}
function testFunc() { // what happens on the click
  // for (let i=0;i<=3;i++) {
  //while(pcounter===5 || cpucounter===5) {
//   console.log("Welcome to ROCK, PAPER and SCISSORS!\n");
// console.log("You'll be playing against the mighty CPU.\n");
// console.log("Let's get acquainted first...\n");

// let playerName1 = prompt("Enter your name here...\n", "Player One");

// console.log(`Ahh...Welcome to the game ${playerName1}.\n`);
// console.log("You plan on a winner take all...So be it...\n");
//     console.log(`${playerName1}, enter your weapon of choice.\n`);

    let pSelect = "ROCK";
    // rockaudio.play();
    

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
      tieaudio.play();
      battletextmessage.innerText = "Goddamnit! It's a tie!";
      document.getElementById("playeroneimage").src = "rock-removebg-preview.png";
      document.getElementById("cpuimage").src = "rock-removebg-preview.png";
      // updatecpuscoreid.innerText = cpucounter;
      // updateplayerscoreid.innerText = pcounter;

    }

      else if (pSelect.toUpperCase() === "ROCK" && compVal === "PAPER") {
      // compCounter = compCounter + 1;
      // console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
      paperaudio.play();
      battletextmessage.innerText = `CPU's PAPER engulfs ${bravesoul}'s ROCK!\n`;
      document.getElementById("playeroneimage").src = "rock-removebg-preview.png";
      document.getElementById("cpuimage").src = "paper-removebg-preview.png";
      cpucounter = cpucounter + 1;
      updatecpuscoreid.innerText = cpucounter;  // ran into problems because of post incrementing
      // pre-incrementing works properly (check again)
      // does pcounter, cpucounter = 0 work after pre-increment - check
      // updateplayerscoreid.innerText = pcounter ;
      }

      else if (pSelect.toUpperCase() === "ROCK" && compVal === "SCISSOR") {
        // pCounter = pCounter + 1;
        // console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
        rockaudio.play();
        battletextmessage.innerText = `${bravesoul}'s ROCK smashed CPU's SCISSOR!\n`;
      document.getElementById("playeroneimage").src = "rock-removebg-preview.png";
      document.getElementById("cpuimage").src = "scissorscimitar-removebg-preview.png";
      // updatecpuscoreid.innerText = cpucounter ;
       pcounter = pcounter + 1;
       updateplayerscoreid.innerText = pcounter;
      }

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    // if(pcounter === 5) {
    //   alert("Message shown for player r to 5.");

    // }
    //document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    //updatecpuscoreid.innerText = cpucounter + 1234;
   //}
   if(pcounter === 5) {//pehle score etc update ho jaaye. Celebratory effects fireworks jaise maybe check
    document.getElementById("playeroneimage").src = "pwinner.gif";
    document.getElementById("cpuimage").src = "cpulose.gif";
    pyroPlay();
    pwinaudio.play();
    battletextmessage.innerText = `Victory is yours, ${bravesoul}! Regale and rejoice!`;
    alert(`Congratulations ${bravesoul}! You are victorious in this Race to 5!`);
  } 
  
  else if (cpucounter ===5) {
    document.getElementById("cpuimage").src = "cpuwinner.gif";
    document.getElementById("playeroneimage").src = "plose.gif";
    pyroPlay();
    cpuwinaudio.play();
    document.getElementById("section3beechkaid").src = "cpuwincanvas.gif";
    document.getElementsByTagName("canvas").src = "cpuwincanvas.gif";
    battletextmessage.innerText = "Alas, the machine snatches a win! Commiserations!";
    alert(`Congratulations CPU! A well navigated victory. Truly machinelike.`)
  }
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
      tieaudio.play();
      battletextmessage.innerText = "Goddamnit! It's a tie!";
      document.getElementById("playeroneimage").src = "paper-removebg-preview.png";
      document.getElementById("cpuimage").src = "paper-removebg-preview.png";
      // updatecpuscoreid.innerText = cpucounter + 0;
      // updateplayerscoreid.innerText = pcounter + 0;

      }

      else if (pSelect.toUpperCase() === "PAPER" && compVal === "ROCK") {
      // compCounter = compCounter + 1;
      paperaudio.play();
      battletextmessage.innerText = `${bravesoul}'s PAPER engulfs CPU's ROCK!\n`;

      document.getElementById("playeroneimage").src = "paper-removebg-preview.png";
      document.getElementById("cpuimage").src = "rock-removebg-preview.png";
      // updatecpuscoreid.innerText = cpucounter + 0;
      pcounter = pcounter + 1;
      updateplayerscoreid.innerText = pcounter;
      }

      else if (pSelect.toUpperCase() === "PAPER" && compVal === "SCISSOR") {
        // pCounter = pCounter + 1;
        scissoraudio.play();
        battletextmessage.innerText =`CPU's SCISSOR rips through ${bravesoul}'s PAPER!`;
      document.getElementById("playeroneimage").src = "paper-removebg-preview.png";
      document.getElementById("cpuimage").src = "scissorscimitar-removebg-preview.png";
      cpucounter = cpucounter + 1;
      updatecpuscoreid.innerText = cpucounter;
      }

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    //document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    //updatecpuscoreid.innerText = cpucounter + 1234;
  // }
  if(pcounter === 5) {//pehle score etc update ho jaaye. Celebratory effects fireworks jaise maybe check
    document.getElementById("playeroneimage").src = "pwinner.gif";
    document.getElementById("cpuimage").src = "cpulose.gif";
    pyroPlay();
    pwinaudio.play();
    battletextmessage.innerText = `Victory is yours, ${bravesoul}! Regale and rejoice!`;
    alert(`Congratulations ${bravesoul}! You are victorious in this Race to 5!`);
  } 
  
  else if (cpucounter ===5) {
    document.getElementById("cpuimage").src = "cpuwinner.gif";
    document.getElementById("playeroneimage").src = "plose.gif";
    pyroPlay();
    cpuwinaudio.play();
    document.getElementById("section3beechkaid").src = "cpuwincanvas.gif";
    document.getElementsByTagName("canvas").src = "cpuwincanvas.gif";
    battletextmessage.innerText = "Alas, the machine snatches a win! Commiserations!";
    alert(`Congratulations CPU! A well navigated victory. Truly machinelike.`)
  }
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
      tieaudio.play();
      battletextmessage.innerText = "Goddamnit! It's a tie!";
      document.getElementById("playeroneimage").src = "scissorscimitar-removebg-preview.png";
      document.getElementById("cpuimage").src = "scissorscimitar-removebg-preview.png";
      // updatecpuscoreid.innerText = cpucounter + 0;
      // updateplayerscoreid.innerText = pcounter + 0;

      }

      else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "PAPER") {
      // compCounter = compCounter + 1;
      // console.log(`${compCounter} - ${pCounter} to the CPU! PAPER engulfs ${playerName1}'s ROCK!\n`);
      scissoraudio.play();
      battletextmessage.innerText = `${bravesoul}'s SCISSOR shreds CPU's PAPER!\n`;
      document.getElementById("playeroneimage").src = "scissorscimitar-removebg-preview.png";
      document.getElementById("cpuimage").src = "paper-removebg-preview.png";
      // updatecpuscoreid.innerText = cpucounter + 0;
      pcounter = pcounter + 1;
      updateplayerscoreid.innerText = pcounter;
      }

      else if (pSelect.toUpperCase() === "SCISSOR" && compVal === "ROCK") {
        // pCounter = pCounter + 1;
        // console.log(`${pCounter} - ${compCounter} to ${playerName1}! ${playerName1}'s ROCK smashed CPU's SCISSOR!\n`);
        rockaudio.play();
        battletextmessage.innerText = `CPU's ROCK smashes ${bravesoul}'s SCISSOR!\n`;
      document.getElementById("playeroneimage").src = "scissorscimitar-removebg-preview.png";
      document.getElementById("cpuimage").src = "rock-removebg-preview.png";
      cpucounter = cpucounter + 1;
      updatecpuscoreid.innerText = cpucounter;

      // updateplayerscoreid.innerText = pcounter + 0;
      }

    console.log(`CPU has chosen to call upon ${compVal}!\n`);
    //document.getElementById("playeroneimage").src = "rock.png";
    //document.getElementById("cpuscoreid").innerText = 1; // used innerHTML
    //let updatecpuscoreid = document.getElementById("cpuscoreid");
    //updatecpuscoreid.innerHTML += +5078;
    //updatecpuscoreid.innerText = cpucounter + 1234;
    if(pcounter === 5) {//pehle score etc update ho jaaye. Celebratory effects fireworks jaise maybe check
      // winning images swap here - victor and loser
      // counter ko bhi rok dena hai yahan se aage
      // remove event listener after condition(s) met, maybe
      // Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=27397">Pixabay</a>
      document.getElementById("playeroneimage").src = "pwinner.gif";
    document.getElementById("cpuimage").src = "cpulose.gif";
    pyroPlay();
      pwinaudio.play();
      battletextmessage.innerText = `Victory is yours, ${bravesoul}! Regale and rejoice!`;
      alert(`Congratulations ${bravesoul}! You are victorious in this Race to 5!`);
    } 
    
    else if (cpucounter === 5) {
      document.getElementById("cpuimage").src = "cpuwinner.gif";
      document.getElementById("playeroneimage").src = "plose.gif";
      pyroPlay();
      cpuwinaudio.play();
      document.getElementById("section3beechkaid").src = "cpuwincanvas.gif";
      document.getElementsByTagName("canvas").src = "cpuwincanvas.gif";
      battletextmessage.innerText = "Alas, the machine snatches a win! Commiserations!";
      alert(`Congratulations CPU! A well navigated victory. Truly machinelike.`);
    }
   
}

// condition to stop here
// if(pcounter === 5) {
//   alert(`Congratulations ${bravesoul}! You are victorius in this Race to 5!`);
// } 

// else if (cpucounter ===5) {
//   alert(`Congratulations CPU! A well navigated victory. Truly machinelike.`)
// }