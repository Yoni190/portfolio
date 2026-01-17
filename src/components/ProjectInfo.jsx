import React from 'react'

const ProjectInfo = ({ title, desc, img, live="", git="", index}) => {
  return (
    <div className={`flex ${index % 2 ? 'flex-row-reverse' : 'flex-row'} justify-center mt-5`}>
        {/* Project Image */}
        <div className='relative'>
            <a href={live ? live : git} target='_blank' rel='noopener noreferrer'>
              <img src={img} alt={title} width={1000} className='hover:scale-80 transition duration-500'/>
            </a>
        </div>

        {/* Project Info */}
        <div className='p-5 w-1/4 flex flex-col justify-center'>
            <h1 className='font-semibold text-4xl'>{title}</h1>
            <p className='mt-2 text-lg'>{desc}</p>

            {/* Project Links */}
            <div className='flex flex-col gap-5 mt-4'>
              {live && (
                <a href={live} target='_blank' rel="noopener noreferrer" className='underline decoration-blue-400 decoration-4 hover:bg-blue-400 hover:text-white transition duration-500 w-fit p-2'>LIVE WEBSITE</a>
              )}
              {git && (
                <a href={git} target='_blank' rel="noopener noreferrer" className='underline decoration-blue-400 decoration-4 hover:bg-blue-400 hover:text-white transition duration-500 w-fit p-2'>LEARN MORE</a>
              )}
            </div>
        </div>
    </div>
  )
}

export default ProjectInfo