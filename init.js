let mainContainer = document.getElementById("container");
let btn = document.createElement("button");
btn.id ="btn";
btn.innerHTML = "click me";
mainContainer.append(btn);
let popUp = document.createElement("div");
popUp.id = "popUp";
popUp.innerHTML = Date();
popUp.style.display = "none";
mainContainer.append(popUp);
let innerBox = document.createElement("div");
innerBox.id = "innerBox";
popUp.append(innerBox);
innerBox.innerHTML = "Hello!! how are you"
btn.addEventListener("click",clickBtn);
function clickBtn(){
    popUp.style.display = "block";
    btn.style.display = "none";
}






// create box before but display after click , ok
// body turns black after box appears, ok
// box disappears after click anywhere on the screen, ok
// cross icon on the box------
// naming
// refactor - when u make changes in code 
// questions -can we give same name to class id --