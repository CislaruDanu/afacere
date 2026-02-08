<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "king.marsely@gmail.com";
    $subject = "Nouă cerere de contact de la $name";
    $body = "Ai primit o nouă cerere de contact:\n\n" .
            "Nume: $name\n" .
            "Email: $email\n" .
            "Telefon: $phone\n" .
            "Mesaj: $message\n";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h3>Cererea ta a fost trimisă cu succes!</h3>";
    } else {
        echo "<h3>Eroare la trimiterea cererii. Încearcă din nou.</h3>";
    }
} else {
    echo "<h3>Acces interzis.</h3>";
}
?>