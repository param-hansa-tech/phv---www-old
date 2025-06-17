<?php

$EmailTo = "info@phvalues.org";
$Subject = "Message from Param Hansa Values website";

$errorMSG = "";
$name = $email = $phone = $message = null;
 
// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Please enter your full name ";
} else {
    $name = $_POST["name"];
}
 
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Please enter your Email Id ";
} else {
    $email = $_POST["email"];
}

// PHONE
if (empty($_POST["phone"])) {
    $errorMSG .= "Please enter your phone number ";
} else {
    $phone = $_POST["phone"];
}
 
// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Please type in your query or message ";
} else {
    $message = $_POST["message"];
}
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";

$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
if($name && $email && $phone && $message){
	$success = mail($EmailTo, $Subject, $Body, "From:".$email);
}else{
	$success = false;
}

if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
} 