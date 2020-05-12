
//alert('Please enter all data in lowercase. Thank you.'); - USE DOM TO PRINT THIS TO SCREEN THROUGH PTAG'S ONCLICK?? *IMAGE OR BUTTON?*



 let memberAccess = [{
	 name: 'roser',
	 memberNum: 100,
	 nationality: 'spanish',
	 somefunction: () => {
		 return `Thank you ${this.name} has been confirmed. Welcome!`; 
	 },
	 name: 'char',
	 memberNum: 101,
	 nationality: 'english',
	 someOtherFunction: () =>{
		 return `Thank you ${this.name} has been confirmed. Welcome`;
	 },
	 name: 'micah',
	 memberNum: 99,
	 nationality: 'english',
	 yetAnotherFunction: () =>{
		return `Thank you ${this.name} has been confirmed. Welcome`;
	
},
//I would like to know if I can push a object to an array? I am going to test this and if not then maybe I will change this to
//have some arrays inside an object. Then I can add more members by pushing new index to the array. 
	






const drinksOrder = () =>{

	const drinksList = ['coke', 'lemonade', 'champz', 'water'];


	let drinkChoice = prompt(`Welcome to my Cafe! What drink would you like to order?`);

	// instead of using for(let i =0; i < drinksList; i++), use the below 'for of loop'
	//try and use an array or even an object in bank machine project, to store user data.
	// Might make it easier to varify data with user?? well, easier than what I have previously tried!

	for (const drinks of drinksList)
	if (drinkChoice === drinksList[0]){
		alert('great choice');
		break;
	} else if(drinkChoice === drinksList[1]){
		alert('fair choice');
		break;
	}else if(drinkChoice === drinksList[2]){
		alert('The BEST choice! Enjoy!');
		break;
	}else if(drinkChoice === drinksList[3]){
		alert('boriiinnnnnggg!!!');
		break;
	}else{
		alert('That is not a valid option.');
		drinksOrder()
	}
//switch case?
	


}


const till = () => {
	let coke = 3; 
	let lemonade = 4;
	let champz = 6;
	let water = 1;

	let userPurse = 20;

	alert(`Welcome to the till, you have ${userPurse} in your digital wallet`);

	prompt

	

}

