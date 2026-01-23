import { useEffect, useRef, useState } from "react"
import ProjectInfo from './ProjectInfo'
import ServantImage from '../assets/servant.png'
import DrznImage from '../assets/drzn.png'

const Projects = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const projects = [
    {
      title: 'Servant',
      desc: 'A website that keeps track of services used for your projects.',
      live: "https://servant-gamma.vercel.app/",
      git: "https://github.com/Yoni190/servant",
      img: ServantImage
    },
    {
      title: 'Drzn',
      desc: 'An e-commerce website serving customers in Riyadh, offering a wide range of products online. Users can browse categories, view product details, add items to their cart, and complete purchases through a secure checkout process.',
      live: "https://drzn.sa",
      img: DrznImage
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      {/* Animated content only */}
      <div
        className={`transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h2 className="text-4xl text-center font-bold mb-10">
          Projects
        </h2>

        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`mt-8 mb-8 transition-all duration-700 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
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
    </section>
  )
}

export default Projects
