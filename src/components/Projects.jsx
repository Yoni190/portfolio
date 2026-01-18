import React from 'react'
import ProjectInfo from './ProjectInfo'
import ServantImage from '../assets/servant.png'
import DrznImage from '../assets/drzn.png'

const Projects = () => {
    const projects = [
        {title: 'Servant', desc: 'A website that keeps track of services used for your projects.', live: "https://servant-gamma.vercel.app/", git: "https://github.com/Yoni190/servant", img: ServantImage},
        {title: 'Drzn', desc: 'An e-commerce website serving customers in Riyadh, offering a wide range of products online. Users can browse categories, view product details, add items to their cart, and complete purchases through a secure checkout process.', live: "https://drzn.sa", img: DrznImage}
    ]
  return (
    <div className='py-20 bg-black text-white'>
        <h2 className='text-4xl text-center font-bold mb-10'>Projects</h2>
        {projects.map((project, index) => (
            <div key={project.title} className='mt-8 mb-8'>
                <ProjectInfo
                    title={project.title}
                    desc={project.desc}
                    live={project.live}
                    git={project.git}
                    img={project.img}
                    index={index}
                    />
            </div>
        ))}
    </div>
  )
}

export default Projects