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


$to = "noella.spitz@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: {$input-name}\nEmail: {$input-email}\nMessage: {$input-message}";
$headers = "From: {$input-email}";


if (mail($to, $subject, $body, $headers)) {
echo "Message sent successfully!";
} else {
echo "Failed to send message.";
}
}
}