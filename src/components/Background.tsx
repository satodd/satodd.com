import React, { useEffect } from 'react'

// https://coolors.co/227c9d-17c3b2-ffcb77-fef9ef-fe6d73

function Background () {
  useEffect(() => {
    const num = 55

    for (let i = 0; i < num; i++) {
      const xPos = Math.floor((Math.random() * 100) + 1)
      const speed = Math.floor((Math.random() * 50) + 10)
      const diameter = Math.floor((Math.random() * 100) + 5)

      const background = document.getElementById('background')
      if (background != null) {
        const bubble = document.createElement('div')
        bubble.className = 'bubble'
        bubble.style.setProperty('left', `${xPos}%`)
        bubble.style.setProperty('animation-duration', `${speed}s`)
        bubble.style.setProperty('-webkit-animation-duration', `${speed}s`)
        bubble.style.setProperty('width', `${diameter}px`)
        bubble.style.setProperty('height', `${diameter}px`)

        background.appendChild(bubble)
      }
    }
  }, [])

  return (
    <div id="background" className="absolute inset-0 z-0"></div>
  )
}

export default Background
