<?php
use Dotenv\Dotenv;

require 'vendor/autoload.php';

// Load environment variables
$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    try {
        //Server settings
        $mail = new PHPMailer(true);

        //Recipients
        $mail->setFrom($_ENV['SMTP_EMAIL'], 'Website Contact');
        $mail->addAddress('king.marsely@gmail.com'); // Add a recipient
        $mail->addReplyTo($email, $name);

        //Content
        $mail->isHTML(true);
        $mail->Subject = "Nouă cerere de contact de la $name";
        $mail->Body    = "<p>Ai primit o nouă cerere de contact:</p>
                          <p><strong>Nume:</strong> $name</p>
                          <p><strong>Email:</strong> $email</p>
                          <p><strong>Telefon:</strong> $phone</p>
                          <p><strong>Mesaj:</strong> $message</p>";

        $mail->send();
        echo "<h3>Cererea ta a fost trimisă cu succes!</h3>";
    } catch (Exception $e) {
        echo "<h3>Eroare la trimiterea cererii. Mailer Error: {$mail->ErrorInfo}</h3>";
    }
} else {
    echo "<h3>Acces interzis.</h3>";
}
?>