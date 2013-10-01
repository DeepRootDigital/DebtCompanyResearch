<?php 

$DebtAmmount = $_POST['debt-ammount'];
$ZipCode = $_POST['zip-code'];
$FirstName = $_POST['first-name'];
$LastName = $_POST['last-name'];
$PhoneNumber = $_POST['phonenumber'];
$toEmail = $_POST['email'];

$to      = 'Nick@businessonmarketst.com';
$subject = 'New Approved Debt Lead';

$message = 'The Following Lead has passed all pre-screening elements. '.'Name:'.$FirstName.' '.$LastName.' Phone Number:'.$PhoneNumber.' Email:'. $toEmail. ' Debt Ammount:'. $DebtAmmount;

$headers = 'From:'. $toEmail . "\r\n" .
    'Reply-To: nickkoskowksi@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

?>