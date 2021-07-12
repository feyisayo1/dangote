// const auth = document.querySelector('.auth_icon');
const home = document.querySelectorAll('.home_icon');


for (let i = 0; i < home.length; i++) {
    home[i].addEventListener('click', (e) => {
        // e.preventDefault();
        for (let x = 0; x < home.length; x++) {
        home[x].classList.remove('active');
            
            
        }
        home[i].classList.add('active');
        // document.location.href = 'auth_1.html';
        console.log("hi")
    });   
    
}

































// var auth_icon = document.querySelector(".auth_icon");
// var isColored = false;
// auth_icon.addEventListener('click' , function(){
//     if(isColored){
//         document.body.style.background = "white";
//     } else{
//         document.body.style.background = "blue";
//         isColored = true;
//     }
// })

// function myFunction() { 
//     var e = document.getElementById("demo");
//     var c = window.getComputedStyle(e).backgroundColor;
//     if (c === "rgb(0, 0, 0)") {
//     document.getElementById("demo").style.background = "#ff77ee";
// } else{
//     document.getElementById("demo").style.background = "#000";
// }
// }