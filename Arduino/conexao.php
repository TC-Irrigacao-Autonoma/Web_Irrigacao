<?php
 /*
    *********** BANCO DE DADOS HOSPEDAGEM AGROIRRIGA ****************************** 
    $CON_CONEXAO = "mysql:host=localhost;dbname=gaviaope_agroirrigadb;charset=utf8";
    $CON_USUARIO = "gaviaope_agroirriga";
    $CON_SENHA = "405937irriga";
*/   
    $CON_CONEXAO = "mysql:host=localhost;dbname=cartol30_agroirriga;charset=utf8";
    $CON_USUARIO = "cartol30_anderson";
    $CON_SENHA = "221044anderson";


    try{
    
        $conexao = new PDO("$CON_CONEXAO", "$CON_USUARIO", "$CON_SENHA");
        echo "Conectado com sucesso";

    }catch(PDOException $erro){
        //echo "Erro: ". $erro->getMessage();
        echo "Conexão_erro";
        exit;
    }
?>  