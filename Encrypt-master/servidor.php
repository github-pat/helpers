<?php
include 'crypto_aes.php';

$cryption = (string)$_POST['pass'];
$aes = new AES();
$hash = '11a2976e56b62e0069b25f38bab06811';
$pass = $aes->decrypt($cryption, $hash);
echo $pass;

?>
