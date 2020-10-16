<?php
    include "conexao.php";


    $umidadesolo_rec = $_GET['umidadeSolo'];
    $sensorChuva_rec = $_GET['chuva'];
    $temperatura_rec = $_GET['temperatura'];
    $umidadeAr_rec = $_GET['umidadeAr'];
    $valvulaSolenoide_rec = $_GET['valvulaSolenoide'];
    

    $SQL_INSERT = "INSERT INTO tbsensores (umidadeSolo, sensorChuva, temperatura, umidadeAr, valvulaSolenoide) VALUES (:usolo, :schuva, :temp, :umidadear, :solenoide)";

    $stmt = $conexao->prepare($SQL_INSERT);

    $stmt->bindParam(":usolo", $umidadesolo_rec);
    $stmt->bindParam(":schuva", $sensorChuva_rec);
    $stmt->bindParam(":temp", $temperatura_rec);
    $stmt->bindParam(":umidadear", $umidadeAr_rec);
    $stmt->bindParam(":solenoide", $valvulaSolenoide_rec);

    if($stmt->execute()){
        echo "insert ok";
    } else {
        echo "insert_erro";
    }



    
?>