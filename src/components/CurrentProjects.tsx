import React from 'react'
import ProjectCard from './subcomponents/ProjectCard'

function CurrentProjects () {
  const currentProjects = [
    {
      title: 'Put it on the List',
      technologies: [
        'Mobile',
        'React Native',
        'Firebase',
        'Expo'
      ],
      desc: 'With multiple streaming services, websites and books out there, there\'s a lot of content to consume! Create multiple lists to keep track of books, movies and shows you want to watch and where to watch them.',
      url: 'https://github.com/satodd/put-it-on-the-list-2023'
    },
    {
      title: 'satodd.com',
      technologies: [
        'Web',
        'React',
        'TailwindCSS'
      ],
      desc: 'My own website! Made by me! Find more about what I\'m working on, what I have worked on and how to get in touch.',
      url: 'https://github.com/satodd/satodd.com'
    }
  ]

  return (
    <div className='relative w-full overflow-hidden bg-white'>
      <div className='container px-8 py-12 md:py-24 mx-auto'>
        <h2 className='mb-2 text-3xl lg:text-5xl font-black text-custom-blue'>Current Projects</h2>
        <div className='mb-8 w-24 border-b-8 border-dotted border-coral'></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {currentProjects?.map((project, index) => (
            <ProjectCard project={project} key={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurrentProjects
