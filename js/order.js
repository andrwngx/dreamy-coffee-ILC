function validate() {
	var fullname = document.getElementById("full_name").value;
	var contactnumber = document.getElementById("contact_number").value;
	var cartemail = document.getElementById("cart_email").value;
	var creditnumber = document.getElementById("credit_number").value;

	var delivery = document.getElementById("delivery").checked;
	var pickup = document.getElementById("pickup").checked;
	var pickuppay = document.getElementById("pickup_pay").checked;
	var onlpay = document.getElementById("onl_pay").checked;
	var visa = document.getElementById("visa").checked;
	var mastercard = document.getElementById("master_card").checked;
	var americanexpress = document.getElementById("american_express").checked;


	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;

	/* Rule 1, check if all required data are entered */
	if (fullname == "") {									//check whether Full Name is empty
	errMsg += "Full Name cannot be empty.\n";
	}
	
	if (! fullname.match (pattern)) {						//check whether full name contains only letters and spaces
		errMsg += "Full Name contains symbols.\n";
	}	

	if (contactnumber == "") {								//check whether Contact Number is empty
		errMsg += "Contact Number cannot be empty.\n";
	}
	if (cartemail == "") {									//check whether Email (for receipt) is empty
		errMsg += "Email (for receipt) cannot be empty.\n";
	}

	if ((!delivery)&&(!pickup)) {				    		//check whether a way to take order is selected
		errMsg += "A way to take order must be selected.\n";
	}
	if ((!pickuppay)&&(!onlpay)) {							//check whether a payment method is selected
		errMsg += "Payment method must be selected.\n";
	}

	/* Rule 2, check if the email contains an @ symbol */
	if (cartemail.indexOf('@') == 0 ) {
		errMsg += "Email cannot start with an '@' symbol.";
	}
	if (cartemail.indexOf('@') < 0 ) {
		errMsg += "Email must contain an '@' symbol.";
	}

	/* Rule 3, check if length of credit card number is valid */
	if ((visa)&&(creditnumber.length != 16)) {     			//check whether credit card number is enough
		errMsg += "Visa card number must have 16 digits.\n";
	}
	if ((mastercard)&&(creditnumber.length != 16)) {     	//check whether credit card number is enough
		errMsg += "MasterCard number must have 16 digits.\n";
	}
	if ((americanexpress)&&(creditnumber.length != 15)) {     //check whether credit card number is enough
		errMsg += "American Express card number must have 16 digits.\n";
	}

	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var ordform = document.getElementById("order_form");
	ordform.onsubmit = validate;
}

window.onload = init;

function duplicateaddress() {			//check whether addresses are the same
	if (document.getElementById("same_add").checked) {
		document.getElementById("billing_address").value = document.getElementById("delivery_address").value;
	}
	else {
		document.getElementById("billing_address").value = "";
	}
}
window.onchange = duplicateaddress;

function duplicate(event) {
	if (document.getElementById("same_add").checked) {
		if (document.getElementById("delivery_address").value) {
			document.getElementById("billing_address").value = document.getElementById("delivery_address").value;
		}
		else {
			alert('Please enter your delivery address first.\n');
			event.preventDefault();
		}

	}
}
window.onchange = duplicate();

function delcheck() {					//check whether delivery option is chosen
	if (document.getElementById('delivery').checked) {
		document.getElementById('delchose').style.display = 'block';
	}
	else document.getElementById('delchose').style.display = 'none';
}
window.onchange = delcheck();

function onlcheck() {					//check whether online payment is chosen
	if (document.getElementById('onl_pay').checked) {
		document.getElementById('onlchose').style.display = 'block';
	}
	else document.getElementById('onlchose').style.display = 'none';
}
window.onchange = onlcheck();