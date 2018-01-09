function validateFormData()
{
	var nameRegExp = /^[a-zA-Z-]{2}/;
	var numbRegExp = /^zha[0-9]{6}/;
	var emailRegExp = /^([a-zA-Z0-9-%_.}{+-£!*)(])+@([a-zA-Z0-9-%_])+[.a-zA-Z]*/;

	var allowSubmit=true;

	var msgRequired = 'This is a required field';
	var msgInvalid = 'This must be a valid input';
	var msgInvalidEmail = 'This must be a valid email address';

	var fname=document.getElementById('fname');
	var fnamealert=document.getElementById('fnamealert');

	var lname=document.getElementById('lname');
	var lnamealert=document.getElementById('lnamealert');

	var email=document.getElementById('email');
	var emailalert=document.getElementById('emailalert');
}


// Check form will check each input and prevent submission of form if any field is invalid

function checkForm() 

{
	var submitBtn = document.getElementById('submit');
	submitBtn.onclick=function(e)

	{
		//checkInput();
		if(!checkValidInput()) // If the return value is false, form did not validate
		{
			e.preventdefault()
		};
	}
	
}