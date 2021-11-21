import React from 'react';
import Typewriter from 'typewriter-effect';

function App() {

    
    document.getElementById("DevHurricane").innerHTML = <Typewriter  

            onInit={(typewriter) => {

                typewriter.typeString("Dev xHurricane...").start();

            }}
        
         
         />

         document.getElementById("DevHurricaneM").innerHTML = <Typewriter  

         onInit={(typewriter) => {

             typewriter.typeString("Dev xHurricane...").start();

         }}
     
      
      />
        
}


export default App;