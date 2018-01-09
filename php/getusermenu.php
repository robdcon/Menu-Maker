<?php

session_start();

include('config.php'); // Database connection

$menu_id = $_REQUEST['dataString']; // Store the request data in a variable

$sql = "SELECT menu_string FROM  menus WHERE '$menu_id' = menu_id"; // Create a query in which to use the usermenuid variable

$result = $conn->query($sql); // Store result of sql query

if($result->num_rows > 0) // Any results are found
{
	while ($row = $result->fetch_assoc()) // While there are rows
	{
		$menu = $row['menu_string']; 		
	}
	echo $menu;
}
else
{
	echo "Error: " . $sql . "<br>" . $conn->error;
}