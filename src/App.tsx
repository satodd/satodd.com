import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet'
import './App.css';

function App() {

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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sarah Todd | Frontend Developer</title>
        <link rel="canonical" href="http://satodd.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className='relative h-screen w-full overflow-hidden bg-coral'>
        <div id="background" className="absolute inset-0 z-0"></div>
        <header className='absolute top-0 p-8 bg-white'>
          <h1 className="pb-1 text-6xl text-coral font-bold">Sarah Todd</h1>
          <p className='mb-4 text-2xl'>Frontend Developer</p>
          <p> Now looking for work!</p>
        </header>
      </div>
    </>
  );
}

export default App;
