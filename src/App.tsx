import React from 'react';

import './App.css';
import Background from './components/Background';
import Head from './components/Head';
import GitlabIcon from './components/svgs/GitlabIcon';
import LinkedinIcon from './components/svgs/LinkedinIcon';
import MailIcon from './components/svgs/MailIcon';

function App() {
  return (
    <>
      <Head />
      <div className='relative h-screen w-full overflow-hidden bg-coral'>
        <Background />
        <header className='absolute top-0 p-8 bg-white'>
          <h1 className="pb-1 text-6xl text-coral font-bold">Sarah Todd</h1>
          <p className='mb-4 text-xl'>Frontend Developer</p>
          <p className='mb-4'> Now looking for work!</p>
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
        </header>
      </div>
    </>
  );
}

export default App;
