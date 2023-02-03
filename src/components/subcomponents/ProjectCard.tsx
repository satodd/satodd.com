import React from 'react'
import GitlabIcon from '../svgs/GitlabIcon'

interface Props {
  project: {
    title: string
    desc: string
    url: string
    technologies: string[]
  }
}

function ProjectCard ({ project }: Props) {
  return (
    <div>
      <div className='border-2 p-6 rounded-md shadow-sm h-full hover:scale-110 translate duration-150'>
        <p className='text-xs uppercase'>Work in progress</p>
        <h3 className='mb-4 text-xl lg:text-3xl font-semibold'>{project.title}</h3>
        <div className='flex flex-row flex-wrap mb-4 gap-1'>
          {project.technologies?.map((technology) => (
            <div className='px-3 py-1 text-xs rounded-full border-2 border-custom-blue' key={technology}>
              {technology}
            </div>
          ))}
        </div>
        <div>
          <p className='mb-8'>
            {project.desc}
          </p>
          <div className='flex flex-row mb-4'>
            <a href={project.url}>
              <div className='flex flex-row px-4 py-2 border-2 border-coral rounded-md text-md font-semibold bg-coral hover:bg-white text-white hover:text-coral transition duration-300'>
                <span className='mr-2 shadow-sm'>Find it on</span><GitlabIcon />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
