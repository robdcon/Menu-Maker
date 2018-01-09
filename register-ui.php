<?php session_start()?>

<?php include("header.php"); 
ini_set('display_errors',true);
error_reporting(E_ALL);
?>

	<!-- Registration Form -->

		<div class="form-container">

			<form id="register-form" action="php/register.php?ver=2" method="POST">
					
					<fieldset>
					<legend>Registration Details</legend>
						<div class="field">
							<label class="visuallyhidden" for="first">First name</label>
							<input id="first" name="first" type="text" placeholder="first name" required>
							<div class="register-alert fname"></div>
						</div><!--field-->
						<div class="field">
							<label class="visuallyhidden" for="last">Last name</label>
							<input id="last" name="last" type="text" placeholder="surname" required>
							<div class="register-alert lname"></div>
						</div><!--field-->
						<div class="field">
							<label class="visuallyhidden" for="email">Email</label>
							<input id="email" name="email" type="email" placeholder="email" required>
							<div class="register-alert email"></div>
						</div><!--field-->
						<div class="field">
							<label class="visuallyhidden" for="usr">Username</label>
							<input id="usr" name="usr" type="text" placeholder="username" required>
							<div class="register-alert username"></div>
						</div><!--field-->
						<div class="field">
							<label class="visuallyhidden" for="psw">Password</label>
							<input id="psw" name="psw" type="password" placeholder="password" required>
							<div class="register-alert psw"></div>
						</div><!--field-->
						
					</fieldset>

					<button type="submit">Sign Up</button>
		
					<div class="errormsg">
		
						<?php
							echo $_SESSION['sqlcheck'];
							//unset($_SESSION['test_msg']);
							echo $_SESSION['sqlcheck'];
							//unset($_SESSION['sqlcheck']);
							if (isset($_SESSION['reg_msg'])) // If an error message has been set by register.php
							{
							
							echo "<span class='error'>".$_SESSION['reg_msg']."</span>"; // Print the message to the DOM
							unset($_SESSION['reg_msg']); // Unset variable for future use
							}
						?>
		
					<div>
		
				</form>

			</div><!--form-container-->

	</body>

</html>