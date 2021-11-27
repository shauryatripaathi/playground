let container = document.getElementById("container");
let boxAppear = document.createElement("div");
boxAppear.id = "boxAppear";
boxAppear.innerHTML = "Hello Welcome!!";
boxAppear.style.display = "none";
container.append(boxAppear);
let btn = document.getElementById("btn");
btn.addEventListener("click" , clickBtn);
function clickBtn(){
    boxAppear.style.display = "block";
    container.style.backgroundColor="black";
}
container.addEventListener("click",boxDisappear);
function boxDisappear(){
    boxAppear.style.display = "none";
}


// create box before but display after click , ok
// body turns black after box appears, ok
// box disappears after click anywhere on the screen, ok
// cross icon on the box