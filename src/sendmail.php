if ($_SERVER["REQUEST_METHOD"] == "post") {
if(
!empty($_POST['input-name'])
&& !empty($_POST['input-email'])
&& !empty($_POST['input-message'])
){
$name = $_POST["input-name"];
$email = $_POST["input-email"];
$phone = $_POST["input-phone"];
$message = $_POST["input-message"];


$to = "your@email.com";
$subject = "New Contact Form Submission";
$body = "Name: {$name}\nEmail: {$input-email}\nPhone: {$input-phone}\nMessage: {$input-message}";
$headers = "From: {$email}";


if (mail($to, $subject, $body, $headers)) {
echo "Message sent successfully!";
} else {
echo "Failed to send message.";
}
}
}