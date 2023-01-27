import React from 'react'
import GitlabIcon from './svgs/GitlabIcon'
import LinkedinIcon from './svgs/LinkedinIcon'
import MailIcon from './svgs/MailIcon'

function Footer () {
  return (
    <footer>
      <div className='relative w-full py-6 overflow-hidden bg-coral shadow-sm'>
        <div className='container px-8 mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold text-white'>Sarah Todd</div>
          <div className='flex flex-row gap-4'>
            <a className='' href="https://www.linkedin.com/in/saatodd/">
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
      </div>
    </footer>
  )
}

export default Footer
