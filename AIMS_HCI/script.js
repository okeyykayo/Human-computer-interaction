function validation() {
	$("#messages").hide();
	$("#messagess").hide();
	
	var error_student = false;
	var error_passwword = false;

	$("#student").focusout(function(){
		check_username();
	});
	
	$("#password").focusout(function(){
		check_password();
	});

	$("#submit").focusout(function(){
		check_submit();
	});


	function check_username(){
		
		var student_length = $("#student").val().length;
		
		if(student_length < 5 || student_length > 20){
			$("#messages").html("*Your student number is incorrect!*");
			$("#messages").show();
			error_student = true;
		}
		else {
			$("#messages").hide();
		}
	}
	
	function check_password(){
		var password_length = $("#password").val().length;
		
		if(password_length < 5){
			$("#messagess").html("Your password is incorrect");
			$("#messagess").show();
			error_password = true;
		}
		else {
			$("#messagess").hide();
		}
	}

	function check_submit(){
		var student = $('#student').val();
		var password = $('#password').val();

	}
}

const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
	
		e.preventDefault()
	}
)


