<?php

session_start();

include('config.php');

$userID = $_SESSION['user_id'];
// $sql = "SELECT recipe_id, recipe_name FROM recipes WHERE recipe_user_id = '$user_id'";
$sql = $pdo->query("SELECT recipe_id, recipe_name FROM recipes WHERE recipe_user_id = '$userID'");

//$result = $conn->query($sql);

$recipearray = [];
$counter = 0;

if ($sql->rowCount()/*$result->num_rows */> 0) 
{
    try
    {
    
        while($row = $sql->fetch(PDO::FETCH_ASSOC)/*$row = $result->fetch_assoc()*/)
        {
            $recipe_id = $row['recipe_id'];
            $recipe_name = $row['recipe_name'];
           // $recipes_user = $row['favourite_username'];

            $recipearray[] = 
            array(

                "id"=>$recipe_id,           
                //"username"=>$recipes_user,
                "recipe"=>$recipe_name
            );

        }

        $json = json_encode($recipearray);

        echo $json;
    }
    catch(PDOException $error)
    {
        echo "Error: ".$error;
    }
   
} 
// else 
// {
//     echo "Error: " . $sql . "<br>" . $conn->error;
// }

// $conn->close();




// ?>