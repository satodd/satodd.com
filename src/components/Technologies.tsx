import React from 'react'
import TechnologyCard from './subcomponents/TechnologyCard'

function Technologies () {
  return (
    <div className='relative w-full overflow-hidden bg-white'>
      <div className='container px-8 py-12 md:py-24 mx-auto'>
        <h2 className='mb-2 text-3xl lg:text-5xl font-black text-custom-blue'>Technologies</h2>
        <div className='mb-8 w-24 border-b-8 border-dotted border-coral'></div>
        <div>
          <h3 className='mb-4 text-xl lg:text-2xl'>Websites</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24'>
            <TechnologyCard title={'React'}/>
            <TechnologyCard title={'Vue'}/>
            <TechnologyCard title={'Django'}/>

            <TechnologyCard title={'TailwindCSS'}/>
            <TechnologyCard title={'MaterialUI'}/>
            <TechnologyCard title={'GatsbyJs'}/>
          </div>

          <h3 className='mb-4 text-xl lg:text-2xl'>Mobile Apps</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <TechnologyCard title={'React Native'}/>
            <TechnologyCard title={'Expo'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies
