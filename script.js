//Function that takes in user input and prints out some text
function userInput() {	
 var email = document.getElementById("email").value;
  var fname = document.getElementById("fname").value;
			document.getElementById("message").value;
			document.getElementById("message").innerHTML=fname +", thank you for your details. We will be in touch via "+email+ " shortly.";
			hide();
}
function hide(){
	document.getElementById("container").style.display = "none";
	
	
}
