var quoteArray = ["Getting Inforamtion..." + "<br><br>" + "" + "Logging in... <br>" + "Success!<br><br><h2>1. Portfolio</h2> <br><p style=\"text-weight: bold;\">This is my portfolio.. You Could take this as a certification of my skills.. I worked on this website for 2 weeks because i designed it from scratch and I'm still upgrading it,<br>" + 
"</p> <br> <h2>2. Space Fighters</h2><br> <img style=\"height: 200px; width: 270px;\" src=\"../assets/images/Python_Game.png\"> <br> <br> <p style=\"text-weight: bold;\"> It's a python game made with pygame, I made it as an experiement and it turned out well! it's a 2D game consists of two spaceships seperates them a border and the goal to reduce the opponent's health my shooting them with laser! " + 
"you can play it multiplayer only using 1 keyboard and 1 pc! for more info click <a href=\"https://github.com/MolhamSYR/python-game\" target=\"_blank\"> here </a> <br> <h2>3. Friends Bot (a Discord Bot) </h2> <br> <img style=\"height: 200px; width: 270px;\" src=\"../assets/images/Discord_bot.png\"> <br> <br> It's a sample bot for beginners to learn from and see the power of discord.py!<br> You could do a lot of fun things with it and play with it as you want! it was a fun experiement making this bot and I hope it will be a helpful tool for beginners to learn from!<br> to learn more about it click <a href=\"https://github.com/MolhamSYR/Friends-bot\" target=\"_blank\"> here </a> <br> <br> <h2>4. Zoom Calculator</h2> <br> <br> Simple Zoom Calculator you can ue while doing your homework on doing math! you can check it <a href=\"https://molhamsyr.github.io/calculator/Calc.html\"> here </a> " + 
"<br> <br> <br> <br> <h2>Thanks for Reading!</h2> <br> I will make sure this portfolio is up to date! <br> for more information you can visit <a href=\"https://github.com/MolhamSYR\"> my github </a> <br> Thanks for your time! <br> <br> - Molham</p>"];
var textPosition = 0; 
var speed = 50;




typewriter = () => {
    document.querySelector("#Message").innerHTML = quoteArray[0].substring(0, textPosition) + '<span>\u25AE</span>';
    console.log("Typed!");
    if(textPosition++ != quoteArray[0].length)
      setTimeout(typewriter, speed);
    
  }
  window.addEventListener("load", typewriter);
  

