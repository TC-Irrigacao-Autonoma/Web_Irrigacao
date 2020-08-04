<?php
    include "conexao.php";

    $umidadesolo_rec = $_GET['sensorUmidadeSolo'];
    $sensorChuva_rec = $_GET['sensorChuva'];
    $temperatura_rec = $_GET['sensorTemperatura'];
    $umidadeAr_rec = $_GET['sensorUmidadeAr'];
    $vazaoDeAgua_rec = $_GET['fluxoVazaoDeAgua'];

    

    $SQL_INSERT = "INSERT INTO tbsensores (umidadeSolo, sensorChuva, temperatura, umidadeAr, vazaoDeAgua) VALUES (:usolo, :schuva, :temp, :umidadear, :vazaoagua)";

    $stmt = $conexao->prepare($SQL_INSERT);

    $stmt->bindParam(":usolo", $umidadesolo_rec);
    $stmt->bindParam(":schuva", $sensorChuva_rec);
    $stmt->bindParam(":temp", $temperatura_rec);
    $stmt->bindParam(":umidadear", $umidadeAr_rec);
    $stmt->bindParam(":vazaoagua", $vazaoDeAgua_rec);

    if($stmt->execute()){
        echo "insert ok";
    } else {
        echo "insert_erro";
    }

?>