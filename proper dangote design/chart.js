    // === include 'setup' then 'config' above ===
    const labels = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
];
const data = {
    labels: labels,
    datasets: [{
    label: 'Batch 1',
    backgroundColor: 'rgb(0, 99, 132)',
    borderColor: 'rgb(0, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
    tension: 0.4
}]
};

const config = {
//type of chart  
type: 'line',
data,
options: {}
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);

a = 2;
b = 2; 

function multiply(a,b) {
    a*b;    
};





  
// var button = document.querySelector("button");
// var isColored = false;

// button.addEventListener("click", function(){
// if(isColored){
// document.body.style.background = "white";
// isColored = false;
// } else{
// document.body.style.background = "blue";
// isColored = true;
// }
// });  