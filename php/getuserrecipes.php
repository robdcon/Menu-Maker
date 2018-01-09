<?php

session_start();

include('config.php');

$username = $_SESSION['username'];
$sql = "SELECT favourite_id, favourite_username, favourite_recipe FROM favourites WHERE favourite_username = '$username'";

$result = $conn->query($sql);

$recipearray = [];
$counter = 0;

if ($result->num_rows > 0) 
{
    
    while($row = $result->fetch_assoc())
    {
        $user_recipes_id = $row['favourite_id'];
        $user_recipes_recipe = $row['favourite_recipe'];
        $user_recipes_user = $row['favourite_username'];

        $recipearray[] = 
        array(

            "id"=>$user_recipes_id,           
            "username"=>$user_recipes_user,
            "recipe"=>$user_recipes_recipe
        );

    }
    $json = json_encode($recipearray);
    echo $json;

    
} 
else 
{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?>