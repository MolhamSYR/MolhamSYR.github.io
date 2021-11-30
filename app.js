var quoteArray = ["Getting Inforamtion..." + "<br><br>" + "" + "Logging in... <br>" + "Success!<br><br><h2>1. Portfolio</h2> <br><p style=\"text-weight: bold;\">This is my portfolio.. You Could take this as a certification of my skills.. I worked on this website for 2 weeks because i designed it from scratch and I'm still upgrading it,<br>" + 
"</p> <br> <h2>2. Space Fighters</h2><br> <img src=\"Python_Game.png\"> <br> <br> <p style=\"text-weight: bold;\"> It's a python game made with pygame, I made it as an experiement and it turned out well! it's a 2D game consists of two spaceships seperates them a border and the goal to reduce the opponent's health my shooting them with laser! " + 
"you can play it multiplayer only using 1 keyboard and 1 pc! for more info click <a href=\"https://github.com/MolhamSYR/python-game\"> here </a> <br> <h2> Friends Bot (a Discord Bot) </h2> <br> <img src=\"Discord_bot.png\"> <br> <br> It's a sample bot </p>"];
var textPosition = 0; 
var speed = 50;
let readytogo = false;

window.addEventListener("load", document.getElementById("info").setAttribute("style","display: none;"))

typewriter = () => {
    document.querySelector("#Message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
    console.log("Typed!");
    if(textPosition++ != quoteArray[0].length)
      setTimeout(typewriter, speed);
    
  }
  window.addEventListener("load", typewriter);
  

