<?php
session_start();

ini_set('display_errors',true);
error_reporting(E_ALL);



// Database creation details are in query folder

// Include test connection function
include 'config.php';

// Variables for POST data from login.php
$usr = (isset($_POST['usr']) ? $_POST['usr'] : null);
$psw = (isset($_POST['psw']) ? $_POST['psw'] : null);
$first = (isset($_POST['first']) ? $_POST['first'] : null);
$last = (isset($_POST['last']) ? $_POST['last'] : null);
$email = (isset($_POST['email']) ? $_POST['email'] : null);


$regStmnt = $pdo->prepare("SELECT * FROM users WHERE user_username = :username");

$regStmnt->bindValue('username', $usr);

$regStmnt->execute();

//$regStmnt->fetch();

$count = $regStmnt->rowCount();

//$checkresult = $conn->query($sqlcheck); // Store the result of the query

//$checkcount = mysqli_num_rows($checkresult); // Count the amount of returned rows

if ($count > 0/*$checkcount > 0*/) // If any matching rows exist the username is taken
{ 
	$_SESSION['reg_msg'] = "This username is already taken"; // Set the error message
	header("Location: ../register-ui.php");	// Refresh the page
}
else // Otherwise, continue to upload the details...
{

	//Enter values into the appropriate table in mysql

	//$result = $conn->query($sql);
	$query = $pdo->prepare("INSERT INTO users (user_username, user_fname, user_lname, user_email, user_password) 
	VALUES (:username,:fname, :lname, :email, :password)");

	$query->execute(['username'=>$usr, 'fname'=>$first, 'lname'=>$last, 'email'=>$email, 'password'=>$psw]);

	$result=$query->fetch();

	if($query->execute() /*$result = $conn->query($sql)*/) // If the query attemp returns true, direct to login screen to login
	{
		header("Location: ../login-ui.php");
	}
	else // If unsuccessful dispaly an error message and stay on this page
	{			
		$_SESSION['reg_msg'] = "Sorry, there was a problem with your registration";
		header("Location: ../register-ui.php");	
	}
}

?>
