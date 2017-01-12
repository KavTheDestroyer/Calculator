// JavaScript Document

//Change display
function d(val) {
	if(val==''){
		<img src="http://s3.amazonaws.com/feather-files-aviary-prod-us-east-1/h6x69kt5qn4mwje1/2017-01-12/7ee94255a16a45b18b0748d143686e5c.jpg" alt="Waves">
	}
	
	document.getElementById("d").value = val;

}

//Type numbers and operators
function v(val) {
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