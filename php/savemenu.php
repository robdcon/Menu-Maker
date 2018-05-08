<?php
session_start();

include('config.php');


if(isset($_SESSION['username']) && isset($_REQUEST['dataString'])) // If a user is in session & menu data has been set o the request gloal variable
{

		$user = $_SESSION['username']; // Set username to variable

		$user_id = $_SESSION['user_id'];

		$menustring = $_REQUEST['dataString']; // Create variable set to the provided data in datastring

		$menu = json_decode($menustring); // Decode json to access properties required for the database entry

		//These dates will be stored in the database to help future retrieval
		
		$day = $menu->day; // Set by menu.js
		$displaydate = $menu->date;
		$created = $menu->datecreated;

		$sql = $pdo->prepare("INSERT INTO menus (menu_menuname, menu_date_created, menu_date_display,menu_string, menu_user_id) VALUES (:day,:created,:displaydate,:menustring,:userid)");

		$sql->execute(['day'=>$day,'created'=>$created,'displaydate'=>$displaydate,'menustring'=>$menustring,'userid'=>$user_id]);

		try
		{
			if ($sql) 
			{
			    echo "New record created successfully";
			}
		} 
		catch(PDOException $error) 
		{
		    echo "Error: ".$error->getMessage() ;
		}
}
else
{
	echo "You must be logged in to do this";
	header("Location: ../login-ui.php");
}

?>