<?php

include('config.php');

//$sql = $pdo->query("Create table test_query_ver_3 (test_id int(11) not null primary key auto_increment)");
// $sql = $pdo->query("Create table test (
// 	test_id int(11) not null primary key auto_increment,
// 	test_data varchar(255)
// 	)");

// $sql = $pdo->query(
// 	"Insert into test 
// 	(test_data)
// 	values 
// 	('Test Data')"
// );

$sql = $pdo->query(
	"Insert into menus 
	(menu_menuname, menu_user_id)
	values 
	('Test Day', 1)"
);

if ($sql) 
{
	echo "Success";
}
else
{
	echo "Failure";
}




?>