<?php

#POST

	$id = $_POST['id'];
	$name = $_POST['name'];

	$sql = "INSERT INTO tabla(id, nombre) VALUES(?,?)";

    try{
        #Instancia de clase de conexión a BD
        $db = new db();
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $id, PDO::PARAM_INT);
        $stmt->bindParam(2, $name, PDO::PARAM_STR);
        $stmt->execute();
        $db = null;
        echo 200;
    } 
    catch(PDOException $e){
        echo '{"error":"'.$e->getMessage().'"}';
    }


#GET

    $tabla = $_GET['tabla'];

	  $sql = "SELECT * FROM '$tabla'";

    try{
        #Instancia de clase de conexión a BD
		$db = new db();
        $db = $db->connect();
        $stmt = $db->query($sql);
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        $jsonn = json_encode($data);
        echo $jsonn;

    } 
    catch(PDOException $e){
        echo '{"error":"'.$e->getMessage().'"}';
    }


#DELETE

	$id = $_POST['id'];
	$tabla = $_POST['tabla'];

    $sql = "DELETE FROM '$tabla' WHERE id = $id";

    try{
    	#Instancia de clase de conexión a BD
        $db = new db();
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $db = null;
        echo 200;
    } 
    catch(PDOException $e){
        echo '{"error":"'.$e->getMessage().'"}';
    }


#UPDATE

    $id = $_POST['id'];
    $pass = $_POST['pass'];

    $sql = "UPDATE login 
    		SET pass = ? 
    		WHERE id = $id";

    try{
        #Instancia de clase de conexión a BD
        $db = new db();
        $db = $db->connect();
        $stmt = $db->prepare($sql);
        $stmt->bindParam(1, $pass, PDO::PARAM_STR);
        $stmt->execute();
        $db = null;
        echo 200;
    } 
    catch(PDOException $e){
        echo '{"error":"'.$e->getMessage().'"}';
    }

 ?>
