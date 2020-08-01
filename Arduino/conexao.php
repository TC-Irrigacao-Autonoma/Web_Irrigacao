<?php

    $CON_CONEXAO = "mysql:host=cp01-do-nyc3;dbname=gaviaope_agroirrigadb;charset=utf8";
    $CON_USUARIO = "gaviaope_agroirriga";
    $CON_SENHA = "405937irriga";

    try{
    
        $conexao = new PDO("$CON_CONEXAO", "$CON_USUARIO", "$CON_SENHA");
        echo "Conectado com sucesso";

    }catch(PDOException $erro){
        //echo "Erro: ". $erro->getMessage();
        echo "Conexão_erro";
        exit;
    }
?>