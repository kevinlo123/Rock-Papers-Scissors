//Author: Kevin Lopez

let points = 0;
const rockElement = document.getElementById("rock");
const paperElement = document.getElementById("paper");
const scissorsElement = document.getElementById("scissors");


const userChoseRock = () => {
  const botsWeapon = computerThrows();
  const usersWeapon = "rock";
  checkWhoWon(botsWeapon , usersWeapon);
}

const userChosePaper = () => {
  const botsWeapon = computerThrows();
  const usersWeapon = "paper";
  checkWhoWon(botsWeapon , usersWeapon);
}

const userChoseScissors = () =>{
  const botsWeapon = computerThrows();
  const usersWeapon = "scissors";
  checkWhoWon(botsWeapon , usersWeapon);
}

const addPointsToPlayer = () => {
  points += 1;
  document.getElementsByTagName("span")[0].innerHTML = points;
}

const addPointsToCpu = () => {
  points += 1;
  document.getElementsByTagName("span")[1].innerHTML = points;
}

const computerThrows = () => {
  let randomNumber = Math.random();
  let botsWeapon = "rock";
  if(randomNumber < .33){
    botsWeapon = "paper";
  }else if(randomNumber > .66){
    botsWeapon = "scissors";
  }
  return botsWeapon;
}

const checkWhoWon = (botsweapon , usersWeapon) => {
  switch(true){
    case botsweapon == usersWeapon:
      document.getElementById("p").innerHTML = "There was a tie!";
      break;

    case botsweapon == "rock" && usersWeapon == "paper":
      document.getElementById("p").innerHTML = "You win! Computer chose rock.";
      addPointsToPlayer();
      break;

    case botsweapon == "paper" && usersWeapon == "rock":
      document.getElementById("p").innerHTML = "You lose! Computer chose paper";
      addPointsToCpu();
      break;

    case botsweapon == "scissors" && usersWeapon == "paper":
      document.getElementById("p").innerHTML = "You lose! Computer chose scissors";
      addPointsToCpu();
      break;

    case botsweapon == "paper" && usersWeapon == "scissors":
      document.getElementById("p").innerHTML = "You win! Computer chose paper";
      addPointsToPlayer();
      break;

    case botsweapon == "scissors" && usersWeapon == "rock":
      document.getElementById("p").innerHTML = "You win! Computer chose scissors";
      addPointsToPlayer();
      break;

    case botsweapon == "rock" && usersWeapon == "scissors":
      document.getElementById("p").innerHTML = "You lose! Computer chose rock";
      addPointsToCpu();
      break;
  }
}

//EVENT HANDLERS
rockElement.addEventListener("click" , userChoseRock);
paperElement.addEventListener("click" , userChosePaper);
scissorsElement.addEventListener("click" , userChoseScissors);