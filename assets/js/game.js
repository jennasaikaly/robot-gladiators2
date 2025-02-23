var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//PSEUDOCODE
// create startGame()

// create endgame() AT end of game, ask if would like to play again? if yes, fight(), if no, quit.


// when SKIP or DEFEAT ROBOT - do you want to visit the shop? if yes, SHOP, if no, continue

//if SHOP - refill health, upgrade attack, leave store?
    // if refill - subtract money, increase health
    //if upgrade - subtract money, increase attack
    //if leave - alert goodbye and exit function




   
// fight function (now with parameter for enemy's name)
var fight = function(enemyName) {

  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
       } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      // break;
      endGame();
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
}; // end of fight function

 // start Game function
 function startGame(){
  // debugger;
  
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
 
 // if player is still alive, keep fighting
 if (playerHealth > 0) {
   // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
   window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

   // pick new enemy to fight based on the index of the enemyNames array
   var pickedEnemyName = enemyNames[i];

   // reset enemyHealth before starting new fight
   enemyHealth = 50;

   // use debugger to pause script from running and check what's going on at that moment in the code
   // debugger;

   // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
   fight(pickedEnemyName);
 }
 // if player isn't alive, stop the game
 else {
  
   window.alert('You have lost your robot in battle! Game Over!');
  //  endGame();
   
    
 }
  

}
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
//play again
// startGame();
}

// function to end the entire game
var endGame = function() {
  if (playerHealth >= 0){
    window.alert('Congratulations! You still have ' + playerHealth + ' points left!' )
  } else {
    window.alert('You have died in battle :(')
  }

  var playAgain = window.confirm('Do you want to play again?');
  if (playAgain){
    startGame()
  } else {
    window.alert('Thank you for playing! Goodbye!');
    }
};




// start the game when the page loads
startGame();