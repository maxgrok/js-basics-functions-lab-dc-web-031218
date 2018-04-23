// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
	// returns number of blocks given a value
	let distanceFromHqInBlocks = Math.abs(42 - someValue);
	return distanceFromHqInBlocks;
}

function distanceFromHqInFeet(someValue){
	let distanceFromHqInFeet = 264 * distanceFromHqInBlocks(someValue) ;
	return distanceFromHqInFeet; 
}

function distanceTravelledInFeet(oneValue, someValue){
	blocks = Math.abs(oneValue - someValue);
	feetTravelled =  264 *(blocks);
	return feetTravelled;
}

function calculatesFarePrice(start, destination){
 	let feet = distanceTravelledInFeet(start, destination);
 	if (feet < 400 ){
 		return 0;
 	} else if (feet > 400 && feet < 2000){
 		let distance = Math.abs(feet - 400);
 		let total = distance * .02;
 		return total;
 	}	else if (feet >= 2000 && feet < 2500){
 		return 25;
 	} else if (feet > 2500) {
 		return "cannot travel that far";
 	}

}