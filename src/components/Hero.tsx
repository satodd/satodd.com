import React from 'react'

import Background from './Background'
import GitlabIcon from '../components/svgs/GitlabIcon'
import LinkedinIcon from '../components/svgs/LinkedinIcon'
import MailIcon from '../components/svgs/MailIcon'

function Hero () {
  return (
    <div className='relative min-h-[600px] h-screen w-full overflow-hidden bg-coral'>
      <Background />
      <div className='h-full w-full flex justify-center items-center border-b-8 border-[#2E83AF]'>
        <header className='z-50 p-8 md:py-24 md:px-16 bg-white shadow-lg bg-opacity-90 border-4 border-[#2E83AF]'>
          <h1 className="pb-1 text-6xl lg:text-8xl text-coral font-bold">Sarah Todd</h1>
          <p className='mb-10 text-2xl lg:text-4xl'>Frontend Developer</p>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className='mb-2 md:mb-0 lg:mr-4 text-lg lg:text-xl'> Now looking for work!</p>
            <div className='flex flex-row items-center gap-x-3'>
              <a href="https://www.linkedin.com/in/saatodd/">
                <LinkedinIcon />
              </a>
              <a href="https://github.com/satodd">
                <GitlabIcon />
              </a>
              <a href="mailto:saatodd@gmail.com">
                <MailIcon />
              </a>
            </div>
          </div>

        </header>
      </div>

    </div>
  )
}

export default Hero
