let counter = 1;


function createTask() {


let inputText = document.getElementById("inputT")

let container = document.getElementById("container");

let newDiv = document.createElement("Div");

let textNode = document.createElement("h2");
newDiv.classList.add("task");
newDiv.classList.add("w3-light-grey");
let count = counter++;
let text = document.createTextNode(count + ". " + inputText.value)
textNode.appendChild(text);
textNode.classList.add("textTask")

newDiv.appendChild(textNode);
newDiv.classList.add("pointer");
newDiv.classList.add("w3-card-4")

container.appendChild(newDiv);


    


}

function deleteTask() {


let target = document.getElementsByClassName("task");

target.item(0).remove();

counter--;


}
