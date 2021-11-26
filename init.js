let container = document.getElementById("container");
let btn = document.getElementById("btn");
btn.addEventListener("click" , clickBtn);
function clickBtn(){
    container.innerHTML = "You clicked the button!!";
}
let boxAppear = document.createElement("div");
boxAppear.id = "boxAppear";
container.append(boxAppear);


