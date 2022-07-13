
// console.log("From Typer: " + wordsTyped);
var typedWords = 0;
var canvasDiv = document.getElementById("canvasDiv");

// function endWordCount() {
//   var disText = textDisplay.querySelectorAll('span');
//   var inputCharacters = inputText.value.split('');
//   disText.forEach((disCharacter, pos) => {
//       var inputChar = inputCharacters[pos];
//       if(inputChar == " ") 
//       {
//           typedWords++;
//       }
//   })
// }

// if(startTime == 1){
//   endWordCount();
// }

// var xtyped = false;
// inputText.addEventListener("input", () => {
//     var xdisText = textDisplay.querySelectorAll('span');
//     var xinputCharacters = inputText.value.split('');
//     xdisText.forEach((xdisCharacter, xpos) => {
//         var xinputChar = xinputCharacters[xpos];
//         if(xinputChar == null)
//         {
//             xtyped = false;
//         }
//         else if(xinputChar == xdisCharacter.innerText)
//         {
//             xtyped = true;
//         }
//         else 
//         {
//             xtyped = true;
//         }
//     })
//     if (xtyped) 
//     {
//         xdisText.forEach((xdisCharacter, pos) => {
//             var xinputChar = xinputCharacters[pos];
//             if(xinputChar == " ") 
//             {
//                 typedWords++;
//                 console.log("word typed by me");
//             }
//         })
//     }
// })









const labels = [
    "Slow",
    "Average",
    "Fluent",
    "Fast",
    "Pro",
  ];

var data = {
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
        }, {
          type: "line",
          label: 'User Score',
          data: [],
          backgroundColor : ["#42f590"],
          borderColor: ["#42f590"],
          borderWidth: 1
        }]
      };

  var config = {
    type: 'bar',
    data: data,
    options: {}
  };

  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  var itv1 = setInterval(updateChart,100)
  

function updateChart() {
    if(startTime==0) {
        // myChart.destroy();
        //     myChart = new Chart(
        //     document.getElementById("myChart"),
        //     config
        // )
        // myChart.update();
        
        setTimeout(function rise(){
            myChart.config.data.datasets[1].data.push(wordsTyped);
            myChart.config.data.datasets[1].data.push(wordsTyped);
            myChart.config.data.datasets[1].data.push(wordsTyped);
            myChart.config.data.datasets[1].data.push(wordsTyped);
            myChart.config.data.datasets[1].data.push(wordsTyped);
            myChart.update();
        },2000)
        // myChart.config.data.datasets[1].data.push(wordsTyped);
        // myChart.config.data.datasets[1].data.push(wordsTyped);
        // myChart.config.data.datasets[1].data.push(wordsTyped);
        // myChart.config.data.datasets[1].data.push(wordsTyped);
        // myChart.config.data.datasets[1].data.push(wordsTyped);
        // myChart.update();

        clearInterval(itv1);
    }

    // myChart.config.data.datasets[1].data.push(typedWords);
    // myChart.update();
}

  