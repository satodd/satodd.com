import React from 'react'

interface Props {
  title: string
}

function TechnologyCard ({ title }: Props) {
  return (
    <div className='p-4 border shadow-sm hover:scale-110 transition duration-150'>
      {title}
    </div>
  )
}

export default TechnologyCard
