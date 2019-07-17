<?php
    // Create a mySQL DB connection
    define("DBHOST","182.50.133.168");
    define("DBUSER","studDB19a");
    define("DBPASS","stud19DB1!");
    define("DBNAME","studDB19a");//need to change this DB name
    
    $connection = mysqli_connect(DBHOST, DBUSER, DBPASS, DBNAME);
    // Testing connection success
    if(mysqli_connect_errno()) {
        echo "die";
        die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")");
    }
?>