let mainContainer = document.getElementById("container");
let btn = document.createElement("button");
btn.id = "btn";
btn.innerHTML = "click me";
mainContainer.append(btn);

let popUp = document.createElement("div");
popUp.id = "popUp";
popUp.style.display = "none";
mainContainer.append(popUp);

let boxShowingDate = document.createElement("div");
boxShowingDate.id = "boxShowingDate";
boxShowingDate.innerHTML = Date();
popUp.append(boxShowingDate);

let innerBox = document.createElement("div");
innerBox.id = "innerBox";
popUp.append(innerBox);
innerBox.innerHTML = "Hello!! how are you"

btn.addEventListener("click", clickBtn);
function clickBtn() {
    popUp.style.display = "block";
    btn.style.display = "none";
}

let crossBtn = document.createElement("button");
crossBtn.id = "crossBtn";
crossBtn.innerHTML = "X"
popUp.append(crossBtn);
crossBtn.addEventListener("click", handleOnCrossBtn);
function handleOnCrossBtn(){
    popUp.style.display = "none";
    btn.style.display = "block";
}





// create box before but display after click , ok
// body turns black after box appears, ok
// box disappears after click anywhere on the screen, ok
// cross icon on the box ok
// naming
// refactor - when u make changes in code 