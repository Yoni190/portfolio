import { useEffect, useRef, useState } from "react"
import ProjectInfo from './ProjectInfo'
import TahurImage from '../assets/tahur.png'
import DrznImage from '../assets/drzn.png'
import HMTImage from '../assets/hmt.png'

const Projects = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const projects = [
    {
      title: 'Tahur',
      desc: 'A telehealth application serving patients throughout Saudi Arabia, offering convenient access to medical consultations from anywhere. Users can discover doctors across various specialties, check real-time availability, schedule appointments, and receive care through secure digital consultations without visiting a clinic.',
      live: "https://play.google.com/store/apps/details?id=com.tahur.tahurapp",
      img: TahurImage
    },
    {
      title: 'Drzn',
      desc: 'An e-commerce website serving customers in Riyadh, offering a wide range of products online. Users can browse categories, view product details, add items to their cart, and complete purchases through a secure checkout process.',
      live: "https://drzn.sa",
      img: DrznImage
    },
    {
      title: 'Home Maintenance Tracker',
      desc: 'A full-stack web application that helps homeowners organize recurring maintenance tasks, organize them into categories, track recurring schedules, and upgrade to a premium plan for unlimited usage.',
      live: 'https://home-maintenance-tracker-ui.vercel.app/',
      git: 'https://github.com/Yoni190/home-maintenance-tracker',
      img: HMTImage
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
