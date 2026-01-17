import React from 'react'

const ProjectInfo = ({ title, desc, img, live="", git}) => {
  return (
    <div className='flex justify-center mt-5'>
        {/* Project Image */}
        <div>
            <img src={img} alt={title} width={1000}/>
        </div>

        {/* Project Info */}
        <div className='p-5'>
            <h1 className='font-semibold text-xl'>{title}</h1>
            <p className='mt-2'>{desc}</p>

            {/* Project Links */}
            <div className='flex flex-col gap-5 mt-4'>
                <a href={live} target='_blank' className='underline decoration-blue-400 decoration-4 hover:bg-blue-400 hover:text-white transition duration-500 w-fit p-2'>LIVE WEBSITE</a>
                <a href={git} target='_blank' className='underline decoration-blue-400 decoration-4 hover:bg-blue-400 hover:text-white transition duration-500 w-fit p-2'>LEARN MORE</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectInfo