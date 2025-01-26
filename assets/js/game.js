var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100
var playerAttack = 10;
var playerMoney = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function(enemyNames) {
    
    while(enemyHealth > 0 && playerHealth > 0) {

    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    if (promptFight ==="SKIP" || promptFight === "skip") {
        //confirm if player wants to skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        if (confirmSkip){
            playerMoney = playerMoney - 10;
            window.alert("You have left the fight.  You have " + playerMoney + " gold coins left.")
            console.log (playerName, playerMoney)
            break;
        } else{
            fight(enemyNames);
        }
    }
    if (promptFight === "FIGHT"|| promptFight === "fight"){
        
 //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
 enemyHealth = enemyHealth - playerAttack;
 
 if(enemyHealth <= 0){
   window.alert(enemyNames + " has died!")
   break;

 }
 else {
   console.log(
    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
  );
 }
   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
 playerHealth = playerHealth - enemyAttack

   
 if (playerHealth <= 0) {
   window.alert("You have died! Game over!")
   playerHealth = 100;
   playerMoney = 10;
   break;
 } else {
   console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
   );
 }
    } 
    else {
        window.alert("Please choose a correct option");
        fight(enemyNames);
    }
}
};
//  function attackRobot(enemyNames){
//  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
//  enemyHealth = enemyHealth - playerAttack;

//  if(enemyHealth <= 0){
//    window.alert(enemyNames + " has died!")
//  }
//  else {
//    console.log(
//     playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
//   );
//  }
//    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
//  playerHealth = playerHealth - enemyAttack


//  if (playerHealth <= 0) {
//    window.alert("You have died!")
//  } else {
//    console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
//    );
//  }
//  }


for(var i = 0; i < enemyNames.length; i++) {
    //checks if player health is above 0
    if (playerHealth > 0) {
        //notifies Player that they are starting the rounds.  Round number is based on index plus 1
        window.alert("Welcome to Robot Gladiators.  This is Round #" + (i + 1))
        // pickedEnemyName is based off of index of robots in the enemyNames array
        var pickedEnemyName = enemyNames[i];
        //resets enemyHealth to 50
        enemyHealth = 50;
        //calls the fight function, passing the pickedEnemyName variable as an argument
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle.  Game Over");
        break;
    }
    
    
}

