
// schijf hier tussen je code
const button = document.getElementById("button");

function myFunction() {
    if (document.getElementById("light").className == "light on") {
        document.getElementById("light").className = "light";       
        button.innerText= "Click to turn on";

    } else {
        document.getElementById("light").className = "light on";
        button.innerText= "Click to turn off";


    }
  }  

// const button = document.getElementById("button");

// button.addEventListener("click", ()=>{

//     if(button.innerText === "click to turn on"){
//         button.innerText = "turn on";
//     }else{
//         button.innerText= "click to turn turn";
//     }
// });

// schijf hier tussen je code