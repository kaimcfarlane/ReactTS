
// console.log("From Typer: " + wordsTyped);
var typedWords = 0;
var canvasDiv = document.getElementById("canvasDiv");

function endWordCount() {
  var disText = textDisplay.querySelectorAll('span');
  var inputCharacters = inputText.value.split('');
  disText.forEach((disCharacter, pos) => {
      var inputChar = inputCharacters[pos];
      if(inputChar == " ") 
      {
          typedWords++;
      }
  })
}

if(startTime == 1){
  endWordCount();
}

const labels = [
    "Slow",
    "Average",
    "Fluent",
    "Fast",
    "Pro",
  ];

// var data = null;

// setInterval(update, 100);
// // startTime == 0
// function update(){
//  if (true) {
//   const newCanvas = document.createElement("canvas");
//   newCanvas.setAttribute("id","myChart");
//   canvasDiv.appendChild(newCanvas);
//     data = {
//       labels: labels,
//       datasets: [{
//         label: 'TYPER SPEED',
//         backgroundColor: ['rgba(255, 99, 132, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',],
//         borderColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 205, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(54, 162, 235)',
//           'rgb(153, 102, 255)'
//         ],
//         borderWidth: 1,
//         data: [25, 45, 65, 85, 100],
//       }, {
//         type: "line",
//         label: 'User Score',
//         data: [typedWords,typedWords,typedWords,typedWords,typedWords],
//         backgroundColor : ["#42f590"],
//         borderColor: ["#42f590"],
//         borderWidth: 1
//       }]
//     };
//     var myChart = new Chart(
//       document.getElementById('myChart'),
//       config
//     );
//     var config = {
//       type: 'bar',
//       data: data,
//       options: {}
//     };
//   }
//   console.log("updated");
// }


data = {
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
          data: [typedWords,typedWords,typedWords,typedWords,typedWords],
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

  