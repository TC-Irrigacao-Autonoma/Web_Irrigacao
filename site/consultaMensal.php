<?php

/*  $CON_CONEXAO = "mysql:host=localhost;dbname=bdarduino;charset=utf8";
    $CON_USUARIO = "root";
    $CON_SENHA = "";
*/
//SELECT ROUND(((1024 - umidadeSolo) * 100)/1024) AS 'umidadeSolo', dataHora FROM tbsensores WHERE id BETWEEN 63 AND 69;

$pdo = new PDO ('mysql:host=localhost;dbname=bdarduino;port=3306;charset=utf8', 'root', '');

//Consulta dos ultimos 7 dias 
$sql = "SELECT ROUND(((1024 - umidadeSolo) * 100)/1024) AS 'umidadeSolo', umidadeAr, temperatura, dataHora FROM tbsensores WHERE dataHora BETWEEN CURRENT_DATE() -30 AND CURRENT_DATE() ";

$statement = $pdo->prepare($sql);


$statement->execute();

while($results = $statement->fetch(PDO::FETCH_ASSOC)){

    $result[] = $results;
}

echo json_encode($result); 

?>