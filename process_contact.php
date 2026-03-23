<?php

$emri = isset($_POST['emri']) ? $_POST['emri'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$pershkrimi = isset($_POST['pershkrimi']) ? $_POST['pershkrimi'] : '';


$emri = htmlspecialchars($emri);
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
$pershkrimi = htmlspecialchars($pershkrimi);


$conn = new mysqli('localhost', 'root', '', 'test');

if ($conn->connect_error) {
    echo "$conn->connect_error";
    die("Connection Failed : " . $conn->connect_error);
} else {

    $stmt = $conn->prepare("INSERT INTO test.registration (emri, email, pershkrimi) VALUES (?, ?, ?)");

    if ($stmt === false) {
        
        echo "Nuk u dergua me sukses " . $conn->error;
    } else {

        $stmt->bind_param("sss", $emri, $email, $pershkrimi);
        $execval = $stmt->execute();

        if ($execval === false) {
            
            echo "Nuk u dergua me sukses " . $stmt->error;
        } else {
            echo "U dergua me sukses...";
        }

        
        $stmt->close();
    }

    
    $conn->close();
}
?>
