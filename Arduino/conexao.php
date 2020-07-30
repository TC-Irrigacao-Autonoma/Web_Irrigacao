<?php

    $CON_CONEXAO = "mysql:host=localhost;dbname=bdarduino;charset=utf8";
    $CON_USUARIO = "root";
    $CON_SENHA = "";

    try{

        $conexao = new PDO("$CON_CONEXAO", "$CON_USUARIO", "$CON_SENHA");

    }catch(PDOException $erro){
        //echo "Erro: ". $erro->getMessage();
        echo "Conexão_erro";
        exit;
    }
?>