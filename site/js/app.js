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
            var nomearray = [];
            for (var i = 0; i < data.length; i++){
                nomearray.push(data[i].umidadeSolo);
            }
            
        }
    });
})

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: ['green', 'blue', 'red'],
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});