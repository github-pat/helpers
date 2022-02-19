<?php
    $regex = '/^[0-9a-zA-Z]+$/';
    $userName = $_POST['user'];
    
    if (preg_match($regex, $userName)) {
        $pass = $_POST['pass'];
        $sql = "SELECT id FROM login WHERE userName = '$userName' AND pass = '$pass'";
    }
    try{
        #Instancia clase conexión
        $db = new db();
        $db = $db->connect();
        $stmt = $db->query($sql);
        $data = $stmt->fetch(PDO::FETCH_OBJ);
        $db = null;
        if ($data != "" && $data !=null) { 
            session_start(); 
            $_SESSION['nom'] = ucfirst($userName);
            $_SESSION['id']= $data->id;
        }
        else{
        	echo '{"error":"Nombre de usuario o contraseña incorrectos"}';
        }
    } catch(PDOException $e){
        echo '{"error":"'.$e->getMessage().'"}';
    }
    
 ?>
