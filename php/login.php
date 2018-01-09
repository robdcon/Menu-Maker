
<?php
//Start session
session_start();

ini_set('display_errors',true);
error_reporting(E_ALL);

// Database creation details are in query folder

// Include test connection function
include ('config.php');

// If the username & password are set, store the values in  variables
$uid = (isset($_POST['username']) ? $_POST['username'] : null);
$psw = (isset($_POST['password']) ? $_POST['password'] : null);

//Protect from hacker injections
$uid = stripslashes($uid);
$psw = stripslashes($psw);

//Create query to check details against database

//Prepare statement using pdo object methods
$stmnt = $pdo->prepare("SELECT * FROM users WHERE user_username = :username AND user_password = :password");


//Bind username & password values to their respective identifiers
$stmnt->bindValue('username', $uid);
$stmnt->bindValue('password', $psw);

//Execute statement with given variables
$stmnt->execute();

$row = $stmnt->fetch();


//Create variable to store result of query
//$result = $conn->query($sql);

//Create variable to count results
//$count = mysqli_num_rows($result);


if(!$row/*$row=mysqli_fetch_assoc($result)*/) // If no rows are found that match the criteria, set the appropriate error msg
{
	$_SESSION['message'] = "Your username or password is incorrect";
	
	header("Location: ../login-ui.php"); // Refresh the login page
}
else // If the matching row is found, set a username and current state message for this session
{
		
	$_SESSION['username'] = $row['user_username'];
	$_SESSION['user_id'] = $row['user_id'];
	$_SESSION['message'] = "Logged in as ".$_SESSION['username'];
	
	header("Location: ../index.php"); // Direct to main page as a logged in user

}
