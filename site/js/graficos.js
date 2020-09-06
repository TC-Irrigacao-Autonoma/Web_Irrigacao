/*var ctx = document.getElementById("myChart");

var chart = ctx.getContext('2d');

chart.fillStyle = "red";
chart.fillRect(0, 0, 100, 200);

chart.fillStyle = "blue";
chart.fillRect(, 0, 100, 200);*/

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
                dataHora_array.push(data[i].dataHora);
                umidadeDoAr_array.push(data[i].umidadeAr);
                temperatura_array.push(data[i].temperatura)
            }  
            graficoSolo(umidadeSolo_array, dataHora_array);//faz a chamada da função para executar o gráfico
            graficoTemp(temperatura_array, dataHora_array);
            graficoAr(umidadeDoAr_array, dataHora_array);
        }
    });
})

//  ---------------------- GRÁFICO UMIDADE DO SOLO -----------------------------------------------------
function graficoSolo(umidadeSolo, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
var ctx = document.getElementById('graficoUmidadeSolo').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: dataHoraP,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'blue',
            borderColor: 'rgb(255, 99, 132)',
            data: umidadeSolo
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}

//  ---------------------- GRÁFICO TEMPERATURA -----------------------------------------------------
function graficoTemp(temperatura, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
    var ctx = document.getElementById('graficoTemperatura').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: dataHoraP,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'blue',
                borderColor: 'rgb(255, 99, 132)',
                data: temperatura
            }]
        },
    
        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }

    //  ---------------------- GRÁFICO UMIDADE DO AR -----------------------------------------------------
function graficoAr(umidadeAr, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray
    var ctx = document.getElementById('graficoUmidadeAr').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: dataHoraP,
            datasets: [{
                label: 'My First dataset',
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
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    }