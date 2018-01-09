<?php
session_start();

include('config.php');

if(isset($_SESSION['username']))
{
	$user = $_SESSION['username'];
	$resultString = $_REQUEST['datastring'];

	$sql = "INSERT INTO favourites (favourite_recipe, favourite_username ) VALUES ('$resultString', '$user')";

	if ($conn->query($sql) === TRUE) {
	    echo "New record created successfully";
	} 
	else 
	{
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
else
{
	echo "You must be logged in to do this";
	header("Location: ../login-ui.php");
}
//$conn->close();