var confirmTxt = "This page may contain viruses. Do you wish to continue?";
	if (confirm(confirmTxt)==true) {
		alert("You pressed OK");
	}
	else{
		alert("You pressed CANCEL");
	}
let firstName = prompt("What is your First Name?", "Your");
let lastName = prompt("What is your Last Name?", "Name");
document.getElementById('idk').innerHTML = "Hello "+firstName+lastName+" do you want me to compute ";
