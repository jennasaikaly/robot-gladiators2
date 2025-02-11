var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    
    // generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);


enemyHealth = Math.max(0, enemyHealth - damage);

    console.log(
      playerName + ' attacked ' + enemyName + ' with ' + damage + ' damage.  ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
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
    //randomizes the enemy attack number
    var damage = randomNumber(enemyAttack - 3, enemyAttack)
    
    //removes player health, without letting it go below 0
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName + ' attacked ' + playerName + ' with ' + damage + " damage.  " + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
      
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  } // end of while loop
};

// function to generate a random numeric value
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
 
  return value;
};

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
enemyHealth = randomNumber(40,60);
console.log("Enemy health is " + enemyHealth);
// pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
fight(pickedEnemyName);

  if (playerHealth > 0 && i < enemyNames.length - 1){
    var confirmShop = window.confirm('Would you like to shop?');
    if (confirmShop){
      shop();
    }
  }
}
// if player isn't alive, stop the game
else {

window.alert('You have lost your robot in battle! Game Over!');
break;


}
}
// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
//play again
// startGame();
};

// function to end the entire game
var endGame = function() {
  // debugger; 
  if (playerHealth > 0){
    window.alert('Congratulations! You still have ' + playerHealth + ' points left!' )
  } else {
    window.alert('You have died in battle :(')
  }

  var playAgain = window.confirm('Do you want to play again?');
  if (playAgain){
    startGame();
  } else {
    window.alert('Thank you for playing! Goodbye!');
      }
  };


var shop = function(){
  // debugger;  
    var shopOptionPrompt = window.prompt(
      "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );

    switch(shopOptionPrompt) {
      
      case "REFILL":
      case "refill":
        if (playerMoney >= 7){
        window.alert("Refilling player's health by 20 for 7 dollars.");
        playerHealth += 20;
        playerMoney -= 7;
        shop()
        break;
      } else { 
        window.alert('You do not have enough money!')
        break;
      }
        
      case "UPGRADE":
      case "upgrade":
        if (playerMoney >= 7){
        window.alert("Upgrading player's attack by 6 for 7 dollars.");
        playerAttack += 6;  
        playerMoney -=7;
        shop();      
        break;
        } else {
          window.alert('You do not have enough money!')
          break;
        }
      case "LEAVE":
      case "leave":
        window.alert("Leaving the store.");
        break;
      default:
        window.alert("You did not pick a valid option. Try again.");
        shop();
        break;
    
  } 
};

// start the game when the page loads
startGame();
