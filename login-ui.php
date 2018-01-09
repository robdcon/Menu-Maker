<?php session_start()?> 

<?php include("header.php"); 
ini_set('display_errors',true);
error_reporting(E_ALL);
?>

	<!--login form-->
	<div class="form-container"><form id="login-form" action="php/login.php" method="POST">
	
			<fieldset>
	
				<legend>Enter your login details</legend>
				<div class="field">
	
					<label for="username" class="visuallyhidden">Username</label><!--hidden label for screen readers-->
					<input id="username" name="username" type="text" placeholder="username" aria-required="true">
	
				</div><!--field-->
				<div class="field">
	
					<label for="password" class="visuallyhidden">Password</label>
					<input id="password" name="password" type="password" placeholder="password" aria-required="true" required>
	
				</div><!--field-->
				
			</fieldset>
	
			<!--Section to display error message in case of failed attempt -->
			<div class="errormsg">
	
				<?php
	
					if (isset($_SESSION['message'])) // If an error message has been set, print it to the console
					{
						
						echo "<span class='error'>".$_SESSION['message']."</span>";
						unset($_SESSION['message']); // Unset the message variable so it can be used on another try
					}
	
				?>
	
			</div>
	
			<button id="submitdetails" type="submit">Log in</button> <!-- Submit user input -->
			<div><a href="php/logout.php">Switch user</a></div> <!-- Script to end current session -->
			<div><a href="reminder.php"></a>Forgotten password?</div> <!-- Send a password reminder to the user --> 
	
		</form></div>

</body>
</html>