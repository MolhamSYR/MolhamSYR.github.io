let randomNumber = Math.ceil(Math.random() * 10);

let names = ["Molham", "Mostafa", "Majdi", "Abdelrahman", "Mohammed", "Ayham", "Ahmad", "Hussein", "Mahmoud", "Ibrahim", "Khoder"];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Friday","Monday", "Wednesday","Monday"];
let dayKilled = days[randomNumber];
let greeting = document.getElementById("greeting");
greeting.textContent = "Oh No! It Looks Like " + names[randomNumber] + " Has Died!";

let lastSeen = document.getElementById("seenTime");
let victimName = document.getElementById("Name");
let relation = document.getElementById("relation");
let btn = document.getElementById("btn");

btn.onclick = () => {


if((relation.value == "Enemy")) {
    alert("You are Suspicious! Please come with us!");
}


else if(lastSeen.value == dayKilled) {
    alert("You are Suspicious! Please come with us!");
}

}





















