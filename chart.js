
console.log("From Typer: " + wordsTyped);
const labels = [
    "Slow",
    "Average",
    "Fluent",
    "Fast",
    "Pro",
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'TYPER SPEED',
      backgroundColor: ['rgba(255, 99, 132, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)'
      ],
      borderWidth: 1,
      data: [25, 45, 65, 85, 100],
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );