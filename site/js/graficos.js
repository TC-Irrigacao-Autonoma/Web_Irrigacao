/*var ctx = document.getElementById("myChart");

var chart = ctx.getContext('2d');

chart.fillStyle = "red";
chart.fillRect(0, 0, 100, 200);

chart.fillStyle = "blue";
chart.fillRect(, 0, 100, 200);*/

// ------- CONSULTA DIÁRIA -----------------------
$('document').ready(function() {
    $.ajax({
        type: "POST",
        url: "consultaDiaria.php",
        dataType: "json",
        success: function (data) {
            
            var umidadeSolo_array = [];
            var dataHora_array = [];
            var umidadeDoAr_array = [];
            var temperatura_array = [];

            for (var i = 0; i <data.length; i++){ //atibui os dados do banco a uma array respectivo ao indice
                umidadeSolo_array.push(data[i].umidadeSolo); 
                dataHora_array.push(data[i].horatb);
                umidadeDoAr_array.push(data[i].umidadeAr);
                temperatura_array.push(data[i].temperatura)
            }  
            graficoSoloDiario(umidadeSolo_array, dataHora_array);//faz a chamada da função para executar o gráfico
            graficoTempDiario(temperatura_array, dataHora_array);
            graficoArDiario(umidadeDoAr_array, dataHora_array);
        }
    });
})

//  ---------------------- GRÁFICO UMIDADE DO SOLO -----------------------------------------------------
function graficoSoloDiario(umidadeSolo, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
    var ctx = document.getElementById('graficoUmidadeSoloDiario').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
            datasets: [{
                label: 'UMIDADE DO SOLO (%)',
                backgroundColor: 'green',
                borderColor: 'rgb(255, 99, 132)',
                data: umidadeSolo
            }]
        },
    
        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: { suggestedMin: 0,
                        suggestedMax: 100,
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }
    
    //  ---------------------- GRÁFICO TEMPERATURA -----------------------------------------------------
    function graficoTempDiario(temperatura, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
        var ctx = document.getElementById('graficoTemperaturaDiario').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
                datasets: [{
                    label: 'TEMPERATURA (°C)',
                    backgroundColor: 'orange',
                    borderColor: 'rgb(255, 99, 132)',
                    data: temperatura
                }]
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        ticks: { suggestedMin: 0,
                            suggestedMax: 50,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        }
    
        //  ---------------------- GRÁFICO UMIDADE DO AR -----------------------------------------------------
    function graficoArDiario(umidadeAr, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
        var ctx = document.getElementById('graficoUmidadeArDiario').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',
        
            // The data for our dataset
            data: {
                labels: ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h"],
                datasets: [{
                    label: 'UMIDADE DO AR (%)',
                    backgroundColor: 'blue',
                    borderColor: 'rgb(255, 99, 132)',
                    data: umidadeAr
                }]
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        ticks: { suggestedMin: 0,
                            suggestedMax: 100,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        }

//=====================================================================================================================

//====================================================================================================================

// ------------ CONSULTA SEMANAL -----------------------
$('document').ready(function() {
    $.ajax({
        type: "POST",
        url: "consultaSemanal.php",
        dataType: "json",
        success: function (data) {
            
            var umidadeSolo_array = [];
            var dataHora_array = [];
            var umidadeDoAr_array = [];
            var temperatura_array = [];

            for (var i = 0; i <data.length; i++){ //atibui os dados do banco a uma array respectivo ao indice
                umidadeSolo_array.push(data[i].umidadeSolo); 
                dataHora_array.push(data[i].datatb);
                umidadeDoAr_array.push(data[i].umidadeAr);
                temperatura_array.push(data[i].temperatura);

            }  
            graficoSoloSemanal(umidadeSolo_array, dataHora_array);//faz a chamada da função para executar o gráfico
            graficoTempSemanal(temperatura_array, dataHora_array);
            graficoArSemanal(umidadeDoAr_array, dataHora_array);
        }
    });
})

//  ---------------------- GRÁFICO UMIDADE DO SOLO -----------------------------------------------------
function graficoSoloSemanal(umidadeSolo, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
    var ctx = document.getElementById('graficoUmidadeSoloSemanal').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: dataHoraP,
            datasets: [{
                label: 'UMIDADE DO SOLO (%)',
                backgroundColor: 'green',
                borderColor: 'rgb(255, 99, 132)',
                data: umidadeSolo
            }]
        },
    
        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }
    
    //  ---------------------- GRÁFICO TEMPERATURA -----------------------------------------------------
    function graficoTempSemanal(temperatura, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
        var ctx = document.getElementById('graficoTemperaturaSemanal').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
        
            // The data for our dataset
            data: {
                labels: dataHoraP,
                datasets: [{
                    label: 'TEMPERATURA (°C)',
                    backgroundColor: 'orange',
                    borderColor: 'rgb(255, 99, 132)',
                    data: temperatura
                }]
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 50,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        }
    
        //  ---------------------- GRÁFICO UMIDADE DO AR -----------------------------------------------------
    function graficoArSemanal(umidadeAr, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
        var ctx = document.getElementById('graficoUmidadeArSemanal').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
        
            // The data for our dataset
            data: {
                labels: dataHoraP,
                datasets: [{
                    label: 'UMIDADE DO AR (%)',
                    backgroundColor: 'blue',
                    borderColor: 'rgb(255, 99, 132)',
                    data: umidadeAr
                }]
            },
        
            // Configuration options go here
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        }


