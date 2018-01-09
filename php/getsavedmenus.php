<?php
session_start(); // Current session

include('config.php'); // Connection

$user_id = $_SESSION['user_id'];

$sql = "SELECT menu_id, menu_menuname, DATE_FORMAT(menu_date_created,'%W %D %M %Y') as 'menu_date_created',  menu_date_display, menu_string, menu_status FROM menus WHERE menu_user_id = '$user_id'";

$result = $conn->query($sql);

$menuarray = [];
$counter = 0;

if ($result->num_rows > 0) 
{
    
    while($row = $result->fetch_assoc())
    {
        $usermenuID = $row['menu_id'];
        $display_day = $row['menu_menuname'];
        $display_date = $row['menu_date_display'];
        $menudata = json_decode($row['menu_string']);
        $menustatus = $row['menu_status'];
       

        $menuarray[] = 
        array(
            "id"=>$usermenuID,
            "display_date"=>$display_date,
            "display_day"=>$display_day,
            "menu"=>$menudata,
            "status"=>$menustatus
        );

    }
    $json = json_encode($menuarray);
    echo $json;

    
} 
else 
{
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>