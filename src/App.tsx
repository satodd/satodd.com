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
        background.innerHTML += ('<div class="bubble"  style="left: '+ xPos +'%;\
                        -webkit-animation-duration: '+ speed +'s;\
                        animation-duration:'+ speed +'s; \
                        width:'+diameter+'px; \
                      height:'+diameter+'px;"  ></div>');
      }
    }
  })

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sarah Todd | Frontend Developer</title>
        <link rel="canonical" href="http://satodd.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div className='relative h-screen w-full overflow-hidden bg-coral'>
        <div id="background" className="absolute inset-0 z-0"></div>
        <header className='absolute top-0 p-8 bg-white'>
          <h1 className="pb-1 text-6xl text-coral font-bold">Sarah Todd</h1>
          <p className='text-2xl'>Frontend Developer</p>
        </header>
      </div>
    </>
  );
}

export default App;
