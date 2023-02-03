import React from 'react'

interface Props {
  title: string
}

function TechnologyCard ({ title }: Props) {
  return (
    <div className='p-4 border shadow-sm hover:border-coral transition duration-150 rounded-sm'>
      {title}
    </div>
  )
}

export default TechnologyCard
