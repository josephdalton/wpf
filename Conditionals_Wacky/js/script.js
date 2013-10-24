Harmony Cornett 10/17/2003 //wrong date

Conditionals_Wacky

//If it is snowing, there will be no school.  If it is raining, we will leave school early.  If it is neither raining or snowing, we will stay in school for the full day.

var raining = ("We get out of school early!");
var snowing = ("We don/'t have to go to school today!");
//This line is completely wrong 
	var neither = (raining != raining && snowing != snowing + "We will stay in school for the full day!");


if (raining===raining)  { //This will always be true.
	console.log("We get out of school early!")
}
else if	 (snowing === snowing);  //This is incorrect syntax and will not run and if it did run it would always be true
{
	console.log("We don/'t have to go to school today!"); //This line is incorrect and missing a " befor the We
}
else if (raining != raining && snowing != snowing) {//This line is the same as saying when 1 does not equal 1. (it is never true)
	console.log("We will stay in school for the full day!");
}
