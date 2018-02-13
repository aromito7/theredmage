<?php

$servername = "mysqlcluster3.registeredsite.com";
$username = "aromito7";
$password = "P-chan27";
$database = "rednaxela";

function incrementColumn($table, $title, $field){
    if($conn->query("UPDATE movie where title= 'The Godfather' SET likes = likes + 1;")===TRUE){
        printf("Record updated successfully");
    }
}

$conn = new mysqli($servername, $username, $password, $database);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

if($conn->query("UPDATE movie SET likes = likes + 1 where title = 'The Godfather';")===TRUE){
    printf("Record updated successfully");
}else{
    printf("Failed to update.");
}

if($result = $conn->query("SELECT * FROM movie where title = 'The Godfather'")){
    
    printf("Select returned %d rows. \r\n", $result->num_rows);
    

    foreach($result as $row){
       printf("%s has %s likes and %s dislikes\n", $row['title'], $row['likes'], $row['dislikes']);    
    }
    
    $result->close();
}else{
    printf("No results returned.");
}

echo "Connected successfully";

?>