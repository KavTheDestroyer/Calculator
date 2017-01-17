// JavaScript Document

//Change display
function d(val) {
	//adding waves in display
	
	if(val==''){
		document.getElementById("d").style.backgroundImage = "url('images/wave.jpg')";
	}
	
	document.getElementById("d").value = val;

}

//Type numbers and operators
function v(val) {
	if v(val== .button.operator) {
	document.getElementById("d").style.background-color: teal;
	
	if v(val== .button.number) {
	document.getElementById("d").style.background-color: teal;
	}
	
	document.getElementById("d").value += val;
}

//Evaluate the equation
function e() {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}