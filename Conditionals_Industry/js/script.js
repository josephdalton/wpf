Harmony Cornett 10/17/2013

//If the football score is above or equal to 100 you win the bet!  If the score is below 100 you lose the bet! If you got neither, you did not play!


var scoreAbove = (100);
var scoreBelow = (99);
var noScore = (0);

if (scoreAbove >= 100){
	console.log=("You win the bet!"); //incorrect syntax console.log('text goes here');
}
	
else if (scoreBelow <= 99){
	console.log=("You lose the bet!"); //incorrect syntax
}
else if (score !<= scoreAbove && score !>= scorebelow){ //conditional is incorrectly used.
	console.log=("You did not play!"); //incorrect syntax 
}
