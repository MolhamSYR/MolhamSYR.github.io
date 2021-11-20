<?php

if(isset($_POST['email']) && $_POST['email'] != "") {
if(filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
$userName = $_POST['name'];
$userEmail = $_POST['email'];
$messageSubject = $_POST['subject'];
$message = $_POST['message'];

$to = "molham.work9@gmail.com";
$body = "";

$body .= "From: ". $userName."\r\n";
$body .= "Email: ". $userEmail."\r\n";
$body .= "Message: ". $message."\r\n";

mail($to,$messageSubject,$body);
}
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php echo "<title> Thanks ${$userName} </title>";?>
</head>
<body>
    
    <?php echo "<h1 id=\"greetingMessage\"> Thank You ${userName} for contacting!</h1>"; ?>
    <?php echo "<p id=\"actualMessage\"> Your Message Will Look Like This: <br> ${body} </p>"; ?>
    


</body>
</html>