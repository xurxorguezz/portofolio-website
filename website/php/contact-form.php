<?php

if(isset($_POST['submit'])){
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $Country = $_POST['country'];
    $message = $_POST['subject'];

    $mailto = "arincelmare@gmail.com";
    $headers = "From: my website";
    $txt = "You have received an email from ".$lname.".\n\n".$message;

    if(mail($mailto, $message, $txt, $headers)){
        echo "Mail send succesfully";
    }
    
    else{
        echo "ERROR: could not send email";
    }
    
       
}