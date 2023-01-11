import React, { useEffect } from 'react';

function Background() {
  useEffect(() => {
    let num = 25;

    for (let i=0; i < num; i++) {
      let xPos = Math.floor((Math.random() * 100)+1);
      let speed = Math.floor((Math.random() * 50)+10);
      let diameter = Math.floor((Math.random() * 50)+5);
  
      let background = document.getElementById("background")
      if (background) {
        const bubble = document.createElement("div");
        bubble.className = "bubble"
        bubble.style.setProperty("left", String(xPos + '%'))
        bubble.style.setProperty("animation-duration", speed +'s')
        bubble.style.setProperty("-webkit-animation-duration", speed +'s')
        bubble.style.setProperty("width", diameter +'px')
        bubble.style.setProperty("height", diameter +'px')
        
        background.appendChild(bubble)

      }
    }
  }, [])

  return (
    <div id="background" className="absolute inset-0 z-0"></div>
  );
}

export default Background;
