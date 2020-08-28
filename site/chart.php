<?php

/*  $CON_CONEXAO = "mysql:host=localhost;dbname=bdarduino;charset=utf8";
    $CON_USUARIO = "root";
    $CON_SENHA = "";
*/

$pdo = new PDO ('mysql:host=localhost;dbname=bdarduino;port=3306;charset=utf8', 'root', '');
$sql = "SELECT umidadeSolo FROM tbsensores WHERE id BETWEEN 63 AND 69";

$statement = $pdo->prepare($sql)

$statement->execute();

while($results = $statement->fetch(PDO::FETCH_ASSOC)){
    $result[] = $results;
}

echo json_encode($result);

?>