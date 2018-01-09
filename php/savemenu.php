<?php
session_start();

include('config.php');


if(isset($_SESSION['username'])) // If a user is in session
{

		$user = $_SESSION['username']; // Set username to variable

		$user_id = $_SESSION['user_id'];

		$menustring = $_REQUEST['dataString']; // Create variable set to the provided data in datastring

		$menu = json_decode($menuString); // Decode json to access properties required for the database entry

		//These dates will be stored in the database to help future retrieval
		$day = $menu->day;
		$displaydate = $menu->date;
		$created = $menu->datecreated;

		//$sql = "INSERT INTO menus (menu_menuname, menu_date_created, menu_date_display,menu_string, menu_user_id) VALUES ('$day','$created','$displaydate','$menuString','$user_id')";
		$sql = $pdo->prepare("INSERT INTO menus (menu_menuname, menu_date_created, menu_date_display,menu_string, menu_user_id) VALUES (:day,:created,:displaydate,:menustring,:userid)");
		$sql->execute(['day'=>$day,'created'=>$created,'displaydate'=>$displaydate,'menustring'=>$menustring,'userid'=>$user_id]);

		if ($sql->execute()/*$conn->query($sql) === TRUE*/) {

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
	// header("Location: ../login-ui.php");
}
//$conn->close();




?>