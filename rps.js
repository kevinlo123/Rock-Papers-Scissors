var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var points = 0;

document.getElementById("rock").onclick= userChoseRock;
document.getElementById("paper").onclick= userChosePaper;
document.getElementById("scissors").onclick= userChoseScissors;

function userChoseRock(){
  var botsWeapon = computerThrows();
  var usersWeapon = "rock";
  checkWhoWon(botsWeapon , usersWeapon);
}

function userChosePaper(){
  var botsWeapon = computerThrows();
  var usersWeapon = "paper";
  checkWhoWon(botsWeapon , usersWeapon);
} 

function userChoseScissors(){
  var botsWeapon = computerThrows();
  var usersWeapon = "scissors";
  checkWhoWon(botsWeapon , usersWeapon);
}

function addPointsToPlayer(){
  points += 1;
  document.getElementsByTagName("span")[0].innerHTML = points;
}

function addPointsToCpu(){
  points += 1;
  document.getElementsByTagName("span")[1].innerHTML = points;
}

function computerThrows(){
  var randomNumber = Math.random();
  var botsWeapon = "rock";
  if(randomNumber < .33){
    botsWeapon = "paper";
  }else if(randomNumber > .66){
    botsWeapon = "scissors";
  }
  return botsWeapon;
}

function checkWhoWon(botsweapon , usersWeapon){
  if(botsweapon == usersWeapon){
    document.getElementById("p").innerHTML = "There was a tie!";
  }else if(botsweapon == "rock" && usersWeapon == "paper"){
     document.getElementById("p").innerHTML = "You win! Computer chose rock.";
     addPointsToPlayer();
  }else if(botsweapon == "paper" && usersWeapon == "rock"){
     document.getElementById("p").innerHTML = "You lose! Computer chose paper";
     addPointsToCpu();
  }else if(botsweapon == "scissors" && usersWeapon == "paper"){
     document.getElementById("p").innerHTML = "You lose! Computer chose scissors";
     addPointsToCpu();
  }else if(botsweapon == "paper" && usersWeapon == "scissors"){
     document.getElementById("p").innerHTML = "You win! Computer chose paper";
     addPointsToPlayer();
  }else if(botsweapon == "scissors" && usersWeapon == "rock"){
     document.getElementById("p").innerHTML = "You win! Computer chose scissors";
     addPointsToPlayer();
  }else if(botsweapon == "rock" && usersWeapon == "scissors"){
     document.getElementById("p").innerHTML = "You lose! Computer chose rock";
     addPointsToCpu();
  }else{
    console.log("nothing");
  }
}