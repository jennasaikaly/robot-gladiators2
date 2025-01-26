var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

// var enemy = [
//     {
//         name: "roberto",
//         health: 50,
//         attack: 12
//     },
//     {
//         name: "Amy Android",
//         health: 50,
//         attack: 12
//     },
//     {
//         name: "Robo Trumble",
//         health: 50,
//         attack: 12
//     }
// ]




/*Game states 
WIN GAME - PLAYER defeats all robots
FIGHTS ROBOTS - player must fight all robots
DEFEATS ROBOTS - player must defeat all robots

LOSE GAME - player runs out of health points
*/

var fight = function(enemyNames) {
    // console.log(enemyNames); 
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "FIGHT"|| promptFight === "fight"){
        // console.log(enemyNames)
        attackRobot(enemyNames);
    } else if (promptFight ==="SKIP" || promptFight === "skip") {
        var skipFight = window.confirm("Are you sure you want to quit?");
        if (skipFight){
            playerMoney = playerMoney - 2;
            window.alert("You have left the fight.  You have " + playerMoney + " gold coins left.")
        } else{
            attackRobot(enemyNames);
        }
    }
    else {
        window.alert("Please choose a correct option");
        fight();
    }
  
   
 
  };
 function attackRobot(enemyNames){
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
 enemyHealth = enemyHealth - playerAttack;
 
 if(enemyHealth <= 0){
   window.alert(enemyNames + " has died!")
 }
 else {
   console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );
 }
   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
 playerHealth = playerHealth - enemyAttack

   
 if (playerHealth <= 0) {
   window.alert("You have died!")
 } else {
   console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
   );
 }
 }


 for(var i = 0; i < enemyNames.length; i++) {
    // console.log(enemyNames[i])
    fight(enemyNames[i]);
    
  }
// fight();
