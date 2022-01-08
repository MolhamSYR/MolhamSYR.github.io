
let typewriter = document.querySelector("#job");

tinyTypewriter(typewriter, {
  
  items: ["Developer", "Freelancer"],
    
  typeSpeed: 100,
  deleteSpeed: 50,

  // delay between text
  delayBetweenItems: 3200,

  // infinite loop
  loop: true,

  // time to wait before starting the animation
  startDelay: 100,

  // start the animation at index n
  startsAtIndex: 0,

  // config animated cursor here
  cursor: true,
  cursorChar: "|",
  cursorCharBlinkSpeed: 500,
  cursorCharBlinkTransitionSpeed: 0.10,

  // start the animation when the element is in the viewport
  startOnView: true,

  // offset for startOnView option
  startOnViewOffset: 0
 
});