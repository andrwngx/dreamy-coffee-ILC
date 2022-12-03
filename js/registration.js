function validate() {
	var fname = document.getElementById("first_name").value;
	var lname = document.getElementById("last_name").value;
	var dob = document.getElementById("dob").value;
	var postcode = document.getElementById("postcode").value;
    var fav = document.getElementById("favourite_drink").value;
    var uname = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var confirm = document.getElementById("repass").value;

	var genderM = document.getElementById("genderM").checked;
	var genderF = document.getElementById("genderF").checked;
    var genderO = document.getElementById("genderO").checked;

	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;
    var valipas = /^[a-zA-Z ]/;

	/* Rule 1, check if all required data are entered */
	if (fname == "") {									//check whether First Name is empty
        errMsg += "First Name cannot be empty.\n";
	}
	
	if (! fname.match (pattern)) {						//check whether First Name contains only letters and spaces
		errMsg += "First Name contains symbols.\n";
	}	

    if (lname == "") {									//check whether Last Name is empty
        errMsg += "Last Name cannot be empty.\n";
    }
    
    if (! lname.match (pattern)) {						//check whether Last Name contains only letters and spaces
        errMsg += "Larst Name contains symbols.\n";
    }	

	if (dob == "") {								//check whether Date of Birth is empty
		errMsg += "Date of Birth cannot be empty.\n";
	}

    if ((!genderM)&&(!genderF)&&(!genderO)) {       //check whether Gender is empty
        errMsg += "Gender cannot be empty.\n";
    }

	if (postcode == "") {									//check whether Postcode is empty
		errMsg += "Postcode number cannot be empty.\n";
	}

    if (fav == "") {									//check whether favourite drink is empty
		errMsg += "Please choose your favourite drink.\n";
	}

    if (uname == "") {									//check whether Email (for receipt) is empty
		errMsg += "Email cannot be empty.\n";
	}

    
    if (password == "") {									//check whether Password is empty
		errMsg += "Password cannot be empty.\n";
	}

    if (confirm == "") {									//check whether retyped Password is empty
		errMsg += "Please retype your password to confirm.\n";
	}

	/* Rule 2, check if the email contains an '@' symbol */
	if (uname.indexOf('@') == 0 ) {
		errMsg += "Email cannot start with an '@' symbol.\n";
	}
	if (uname.indexOf('@') < 0 ) {
		errMsg += "Email must contain an '@' symbol.\n";
	}

	/* Rule 3, check if length is valid */
	if (postcode.length != 4) {     			//check whether postcode number is enough
		errMsg += "Postcode number must have 4 digits.\n";
	}

    if (password.length < 7) {                  //check whether password is enough
        errMsg += "Password must be at least 7 characters long.\n";
    }
    
    if (! password.match (valipas)) {						//check whether Password is valid
        errMsg += "Password must include letters.\n";
    }

    /* Rule 4, check if password and retype password are the same */
	if (password != confirm) {
		errMsg += "Passwords do not match.";
	}

	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

function init() {
	var regform = document.getElementById("registration_form");
	regform.onsubmit = validate;
}

window.onload = init;