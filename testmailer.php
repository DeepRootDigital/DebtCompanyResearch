<?php
// Prepare by setting a timezone, mail() uses this.
date_default_timezone_set('America/New_York');

// Save some values to send an email, these might have come from any source:
$to = 'colpanius@gmail.com';
$subject = 'A sample email - Dual Format plus attachment plus inline';

// Create a boundary string.  It needs to be unique (not in the text) so ...
// We are going to use the sha1 algorithm to generate a 40 character string:
$sep = sha1(date('r', time()));

// Define the headers we want passed.
$headers = "From: php@example.com\r\nX-Mailer: Custom PHP Script";

// Add in our primary content boundary, and mime type specification:
$headers .=
    "\r\nContent-Type: multipart/mixed; boundary=\"PHP-mixed-{$sep}\"";

// Also now prepare our inline image - Also read, encode, split:
$inline = chunk_split(base64_encode(file_get_contents('http://www.debtcompanyresearch.com/images/Debt_CartoonLP_1a.jpg')));

// Now the body of the message.
$body =<<<EOBODY
--PHP-mixed-{$sep}
Content-Type: multipart/alternative; boundary="PHP-alt-{$sep}"

--PHP-alt-{$sep}
Content-Type: multipart/related; boundary="PHP-related-{$sep}"

--PHP-related-{$sep}
Content-Type: text/html

<a href="http://www.debtcompanyresearch.com/"><img src="cid:PHP-CID-{$sep}" /></a>
<p style="width:600px;">If you do not wish to receive further promotions from Debt Company Research plaese unsubscribe <a href="http://www.debtcompanyresearch.com/optout/">here</a> or write: Debt Company Research 7975 Raytheon Rd #310 San Diego, CA 92111</p>

--PHP-related-{$sep}
Content-Type: image/jpg
Content-Transfer-Encoding: base64
Content-ID: <PHP-CID-{$sep}>

{$inline}
--PHP-related-{$sep}--

--PHP-alt-{$sep}--

--PHP-mixed-{$sep}--
EOBODY;

// Finally, send the email
mail($to, $subject, $body, $headers);
?>