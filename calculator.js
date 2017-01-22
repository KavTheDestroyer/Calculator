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
	 document.getElementById("d").style.backgroundImage = "";
	 
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
