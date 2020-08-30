<?php

/*  $CON_CONEXAO = "mysql:host=localhost;dbname=bdarduino;charset=utf8";
    $CON_USUARIO = "root";
    $CON_SENHA = "";
*/
//SELECT ROUND(((1024 - umidadeSolo) * 100)/1024) AS 'umidadeSolo', dataHora FROM tbsensores WHERE id BETWEEN 63 AND 69;

$pdo = new PDO ('mysql:host=localhost;dbname=bdarduino;port=3306;charset=utf8', 'root', '');

$sql = "SELECT ROUND(((1024 - umidadeSolo) * 100)/1024) AS 'umidadeSolo', dataHora FROM tbsensores WHERE id BETWEEN 63 AND 69";

$statement = $pdo->prepare($sql);


$statement->execute();

while($results = $statement->fetch(PDO::FETCH_ASSOC)){

    $result[] = $results;
}

echo json_encode($result); 

?>