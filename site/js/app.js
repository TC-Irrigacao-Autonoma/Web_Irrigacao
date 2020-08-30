/*var ctx = document.getElementById("myChart");

var chart = ctx.getContext('2d');

chart.fillStyle = "red";
chart.fillRect(0, 0, 100, 200);

chart.fillStyle = "blue";
chart.fillRect(, 0, 100, 200);*/

$('document').ready(function() {
    $.ajax({
        type: "POST",
        url: "chart.php",
        dataType: "json",
        success: function (data) {
            
            var umidadeSoloarray = [];
            var dataHoraarray = [];

            for (var i = 0; i <data.length; i++){ //atibui os dados do banco a uma array respectivo ao indice
                umidadeSoloarray.push(data[i].umidadeSolo   ); 
                dataHoraarray.push(data[i].dataHora)
            }  
            grafico(umidadeSoloarray, dataHoraarray);//faz a chamada da função para executar o gráfico
        }
    });
})

function grafico(umidadeSoloP, dataHoraP) { //tras os parametros criados dos dados umidadeSoloarray, dataHoraarray

//********* GRÁFICO CHART.JS****************************** */
var ctx = document.getElementById('myChart').getContext('2d');
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
            data: umidadeSoloP
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