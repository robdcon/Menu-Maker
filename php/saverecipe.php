<?php
session_start();

include('config.php');

if(isset($_REQUEST)['recipe'])
{
	print_r( $_REQUEST['recipe']); // Check value of request object

	$user = $_SESSION['username']; 

	$user_id = $_SESSION['user_id']; 

	$recipe = $_REQUEST['recipe']; // Store value of request array index

	// Recipe data set by recipe.js
	$title = $recipe->title; 
	$description = $recipe->description;
	$url = $recipe->url;

	$stmnt = $pdo->prepare("INSERT INTO recipes (recipe_name, recipe_description, recipe_url, recipe_user_id ) VALUES (:recipe, :description, :url, :user_id)");

	$stmnt->execute(['recipe'=>$resultString,'description'=>$description, 'url'=>$url, 'user_id'=>$userID]);

	try 
	{
		if($stmnt) 
	    echo "New record created successfully";
	} 
	catch (PDOException $error)
	{
	    echo "Error: " . $error/*$sql . "<br>" . $conn->error*/;
	}
}
else
{
	echo "Recipe details not set";
	//echo "You must be logged in to do this";
	//header("Location: ../login-ui.php");
}
//$conn->close();