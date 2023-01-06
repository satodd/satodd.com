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
          <p className='mb-4'> Now looking for work!</p>
          <div className='flex flex-row gap-x-3'>
            <a href="https://www.linkedin.com/in/saatodd/">
                <svg
                  className='w-6'
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 122.31"
              >
                  <path
                    d="M27.75 0h67.38a27.83 27.83 0 0 1 27.75 27.75v66.82a27.83 27.83 0 0 1-27.75 27.74H27.75A27.83 27.83 0 0 1 0 94.57V27.75A27.83 27.83 0 0 1 27.75 0Z"
                    style={{
                      fillRule: "evenodd",
                      fill: "#0a66c2",
                    }}
                  />
                  <path
                    d="M49.19 47.41h15.53v8h.22c2.17-3.88 7.45-8 15.34-8 16.39 0 19.42 10.2 19.42 23.47v28.06H83.51V74c0-5.71-.12-13.06-8.42-13.06s-9.72 6.21-9.72 12.65v25.4H49.19V47.41ZM40 31.79a8.42 8.42 0 1 1-8.42-8.42A8.43 8.43 0 0 1 40 31.79ZM23.18 47.41H40v51.53H23.18V47.41Z"
                    style={{
                      fill: "#fff",
                      fillRule: "evenodd",
                    }}
                  />
                </svg>
              </a>
            <a href="https://github.com/satodd">
              <svg
                id="Layer_1"
                className='w-6'
                xmlns="http://www.w3.org/2000/svg"
                x={0}
                y={0}
                viewBox="0 0 122.88 113.2"
                xmlSpace="preserve"
              >
                <style>{".st0{fill:#ec672a}.st1{fill:#dd3e2a}.st2{fill:#f6a420}"}</style>
                <path
                  className="st0"
                  d="m122.65 64.72-6.89-21.15-13.61-41.96c-.7-2.15-3.74-2.15-4.47 0L84.06 43.54H38.81L25.19 1.61c-.7-2.15-3.74-2.15-4.47 0L7.13 43.54.24 64.72c-.62 1.92.05 4.04 1.7 5.24l59.5 43.23 59.5-43.23a4.69 4.69 0 0 0 1.71-5.24z"
                />
                <path className="st1" d="m61.45 113.17 22.63-69.63H38.82l22.63 69.63z" />
                <path className="st0" d="M61.43 113.17 38.81 43.54H7.13l54.3 69.63z" />
                <path
                  className="st2"
                  d="M7.11 43.56.23 64.72c-.62 1.92.05 4.04 1.7 5.24l59.5 43.23L7.11 43.56z"
                />
                <path
                  className="st1"
                  d="M7.12 43.56h31.71L25.18 1.63c-.7-2.15-3.74-2.15-4.47 0L7.12 43.56z"
                />
                <path className="st0" d="m61.45 113.17 22.63-69.63h31.71l-54.34 69.63z" />
                <path
                  className="st2"
                  d="m115.76 43.56 6.89 21.15c.62 1.92-.05 4.04-1.7 5.24l-59.5 43.21 54.31-69.6z"
                />
                <path
                  className="st1"
                  d="M115.78 43.56H84.07L97.69 1.63c.7-2.15 3.74-2.15 4.47 0l13.62 41.93z"
                />
              </svg>
            </a>
            <a href="mailto:saatodd@gmail.com">
              <svg
                data-name="Layer 1"
                className='w-6'
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 122.88"
              >
                <title>{"email-round"}</title>
                <path d="M61.44 0A61.46 61.46 0 1 1 18 18 61.21 61.21 0 0 1 61.44 0ZM32.22 79.39 52.1 59.46 32.22 43.25v36.14Zm22.07-18.15-20.5 20.55h55.12L69.33 61.24l-6.46 5.51a1.42 1.42 0 0 1-1.8 0l-6.78-5.53Zm17.18-1.82 19.19 20.13V43.07L71.47 59.42ZM34 41.09l27.9 22.76 26.75-22.76Zm65.4-17.64a53.72 53.72 0 1 0 15.74 38 53.56 53.56 0 0 0-15.74-38Z" />
              </svg>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
