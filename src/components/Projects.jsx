import React from 'react'
import ProjectInfo from './ProjectInfo'
import ServantImage from '../assets/servant.png'

const Projects = () => {
    const projects = [
        {title: 'Servant', desc: 'A website that keeps track of services used for your projects.', live: "https://servant-gamma.vercel.app/", git: "https://github.com/Yoni190/servant", img: ServantImage}
    ]
  return (
    <div className='py-10 bg-black text-white'>
        <h2 className='text-4xl text-center'>Projects</h2>
        {projects.map((project) => (
            <div key={project.title} className='mt-3'>
                <ProjectInfo
                    title={project.title}
                    desc={project.desc}
                    live={project.live}
                    git={project.git}
                    img={project.img}
                    />
            </div>
        ))}
    </div>
  )
}

export default Projects