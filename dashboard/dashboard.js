var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      data: [17777, 17000, 15000, 17000, 19999, 20456, 17999],
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: '#4682B4',
      borderWidth: 4,
      pointBackgroundColor: '#4682B4'
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false,
    }
  }
});