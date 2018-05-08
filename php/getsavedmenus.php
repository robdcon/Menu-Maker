<?php
session_start(); // Current session

include('config.php'); // Connection

$user_id = $_SESSION['user_id'];

//$sql = "SELECT menu_id, menu_menuname, DATE_FORMAT(menu_date_created,'%W %D %M %Y') as 'menu_date_created',  menu_date_display, menu_string, menu_status FROM menus WHERE menu_user_id = '$user_id'";
$sqlstr = $pdo->prepare("SELECT * FROM menus WHERE menu_user_id = :userID");
//$result = $conn->query($sql);
$sqlstr->execute(['userID'=>$user_id]);

$count = $sqlstr->rowCount();

$result = $sqlstr->fetchAll(); 

// foreach($result as $array)
// {
//     print_r($array);
// }



if ($count > 0/*$result->num_rows > 0*/) 
{
    $menuarray = [];    
    $counter = 0;

    try
    {
    
   

        foreach($result as $savedmenu)
        {
            
            $usermenuID = $savedmenu['menu_id'];
            $display_day = $savedmenu['menu_menuname'];
            $display_date = $savedmenu['menu_date_display'];
            $menudata = json_decode($savedmenu['menu_string']);
            $menustatus = $savedmenu['menu_status'];

            $menu = 
            array(
                "id"=>$usermenuID,
                "display_date"=>$display_date,
                "display_day"=>$display_day,
                "menu"=>$menudata,
                "status"=>$menustatus
            );

           array_push($menuarray, $menu);

        }
     
        $json = json_encode($menuarray);
        print_r($json) ;
        $pdo=NULL;

        
    } 
    catch(PDOException $error) 
    {
        echo "Error: ".$error->getMessage()."</br>";
        (die);
    }
}



?>