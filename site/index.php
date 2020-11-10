<?php

$pdo = new PDO ('mysql:host=localhost;dbname=bdarduino;port=3306;charset=utf8', 'root', '');

//Consulta dos ultimos 7 dias 
$sql = "SELECT umidadeSolo, temperatura, umidadeAr, sensorChuva, valvulaSolenoide, datatb FROM tbsensores WHERE id = '279' ";

$statement = $pdo->prepare($sql);

$statement->execute();

while($registro = $statement->fetch(PDO::FETCH_ASSOC)){

   $umidadeSolo = $registro['umidadeSolo'];
   $temperatura = $registro['temperatura'];
   $umidadeAr = $registro['umidadeAr'];
   $sensorChuva = $registro['sensorChuva'];
   $solenoide = $registro['valvulaSolenoide'];
}
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AgroIrriga</title>
  <!-- Estilo CSS -->
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/graficos.css">
  <!-- Fonte -->
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  <!-- Font Awesome-->
  <script src="https://kit.fontawesome.com/bf7e05c402.js" crossorigin="anonymous"></script>
  <!-- Progress Bar -->
 
</head>

<body>
  <header>
    <div class="container" id="nav-container">
      <nav class="navbar navbar-expand-lg fixed-top">
        <a href="#" class="navbar-brand">
          <img id="logo" src="./img/agroirrigaimg.png" alt="AgroIrriga">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navegation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbar-links">
          
        </div>
      </nav>
    </div>
  </header>

  <div class="container-fluid" style="background-image: url(./img/irrigacao.jpg); background-repeat: no-repeat; background-size: cover; background-position: center center; padding-bottom: 3rem ;">

  <div class="container" >
    <form>
      <div class="row">
        <div class="col-md-4 text-center">
        <label style="font-size: 1.5rem" for="umidadeSolo">Informe a umidade do solo ideal para seu plantio:</label>
          <input class="col-md-3 text-center"type="text" class="form-control" placeholder="" > %</input>
        </div>
      </div>
      <button style="margin-left: 5rem; margin-top: 1rem;" class="btn btn-primary col-md-2" type="submit">Aplicar</button>
    </form>
  </div>

</div>
    <div class="container text-center col-md-9" style="margin-bottom: 3rem">
      <div class="card float-right" style="width: 10rem;">
        <div class="card-body">
          <h5 class="card-title" style="margin-bottom: 3rem;">Irrigação 🚿</h5>
            <p class="card-text" style="font-size: 1.5rem"><?php echo($solenoide);?></p>
        </div>
      </div>
      <div class="card float-right" style="width: 10rem;">
        <div class="card-body">
          <h5 class="card-title">Tempo ⛅</h5>
            <p class="card-text" style="font-size: 1.5rem"><?php echo($sensorChuva);?></p>
        </div>
      </div>
      <div class="card float-right" style="width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">Umidade do Solo 🌱</h5>
            <p class="card-text" style="font-size: 3rem"><?php echo($umidadeSolo);?>%</p>
        </div>
      </div>
      <div class="card float-right" style="width: 13rem;">
        <div class="card-body">
          <h5 class="card-title">Umidade do Ar💧</h5>
            <p class="card-text" style="font-size: 3rem;"><?php echo($umidadeAr);?>%</p>
        </div>
      </div>
      <div class="card float-right" style="width: 11rem;">
        <div class="card-body">
          <h5 class="card-title">Temperatura🌡️</h5>
            <p class="card-text" style="font-size: 3rem"><?php echo($temperatura);?>°C</p>
        </div>
      </div>
    </div>

  
  <div class="container col-md-3">  
    <h2>GRÁFICO SEMANAL</h2>
  </div>
  <div class="container-fluid row">
    <div class="col-md-4" ">
      <canvas id="graficoUmidadeSoloSemanal"></canvas>
    </div>
    <div class="col-md-4">
      <canvas id="graficoTemperaturaSemanal"></canvas>
    </div>
    <div class=" col-md-4" >
      <canvas id="graficoUmidadeArSemanal"></canvas>
    </div>
  </div>

  <div class="container col-md-3">  
    <h2>GRÁFICO DIÁRIO</h1>
  </div>
  <div class="container-fluid row">
    <div class="col-md-4" ">
      <canvas id="graficoUmidadeSoloDiario"></canvas>
    </div>
    <div class="col-md-4">
      <canvas id="graficoTemperaturaDiario"></canvas>
    </div>
    <div class=" col-md-4" >
      <canvas id="graficoUmidadeArDiario"></canvas>
    </div>
  </div>
  <div class="container">  
  </div>
  
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>
  <script src="./js/graficos.js"></script>
  <script src="./js/scripts.js"></script>
</body>
</html>