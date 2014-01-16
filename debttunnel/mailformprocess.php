<?php
$debt = $_POST["debt"];
if ($debt == 5000) {
    $debt = 240904;
} elseif ($debt == 7000) {
    $debt = 240905;
} elseif ($debt == 10000) {
    $debt = 240906;
} elseif ($debt == 15000) {
    $debt = 240907;
} elseif ($debt == 20000) {
    $debt = 240908;
} elseif ($debt == 30000) {
    $debt = 240909;
} elseif ($debt == 50000) {
    $debt = 240910;
} elseif ($debt == 70000) {
    $debt = 240911;
} else {
    $debt = 0;
}
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$zip = $_POST["zip"];
$email = $_POST["email"];
$phonefirst = $_POST["phonefirst"];
$phonesecond = $_POST["phonesecond"];
$phonethird = $_POST["phonethird"];
$phone = $phonefirst . '-' . $phonesecond . '-' . $phonethird;
$country = "United States";
$sid = $_POST["sid"];
$pid = $_POST["pid"];

$url="http://leads.leadexec.net/processor/insert/AutoRedirect?VID=6160&LID=4204&AID=13079&Password=dboxyz123&Country=US&debt=".$debt."&email=".$email."&fname=".$fname."&lname=".$lname."&phone=".$phone."&pid=".$pid."&sid=".$sid."&zip=".$zip;
$ch = curl_init();
curl_setopt( $ch, CURLOPT_URL, $url );
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.6 (KHTML, like Gecko) Chrome/16.0.897.0 Safari/535.6');
curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); 
$content = curl_exec( $ch );
$return = curl_getinfo( $ch );
echo $content;
curl_close ( $ch );

$xml = new SimpleXMLElement($content);
$validity = $xml->isValidPost;
$QC = $xml->PendingQCReview;
$redir = $xml->RedirectURL;


if ($QC == "true") {
    header("Location: http://www.debtcompanyresearch.com/thankyou/?chosen=cambridge");
} elseif ($QC == "false") {
} else {
echo "Error";
}

if ($validity == "true") {
    header("Location: http://www.debtcompanyresearch.com/thankyou/?chosen=cambridge");
} elseif ($validity == "false") {
    echo "Nah Man";
} else {
    echo "Error";
}


?>