import { useEffect, useRef, useState } from "react"
import HtmlImage from '../assets/html.png'
import CssImage from '../assets/css.png'
import JsImage from '../assets/js.png'
import ReactImage from '../assets/react.svg'
import LaravelImage from '../assets/laravel.svg'
import MysqlImage from '../assets/mysql.png'
import GitImage from '../assets/git.png'

const About = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const skills = [
    { name: 'HTML', img: HtmlImage },
    { name: 'CSS', img: CssImage },
    { name: 'JS', img: JsImage },
    { name: 'React', img: ReactImage },
    { name: 'Laravel', img: LaravelImage },
    { name: 'MySQL', img: MysqlImage },
    { name: 'React Native', img: ReactImage },
    { name: 'Git', img: GitImage },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-black text-white"
    >
      {/* Animated content ONLY */}
      <div
        className={`transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h2 className="text-4xl text-center font-bold">About</h2>

        <div className="container mx-auto mt-10 flex flex-col lg:flex-row gap-10 px-5">
          {/* Paragraph */}
          <div className="lg:w-1/2 text-xl leading-relaxed">
            <p>
              I’m Yonatan, a Full Stack Developer passionate about building clean,
              scalable, and modern web applications. With experience in both
              frontend and backend technologies, I enjoy turning ideas into
              interactive, user-friendly solutions.
            </p>
          </div>

          {/* Skills */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="border rounded p-4 flex flex-col items-center
                  hover:scale-110
                  hover:shadow-[0_0_20px_rgba(96,165,250,0.7)]
                  transition duration-500"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  width="50"
                  height="50"
                  loading="lazy"
                  className="mb-2"
                />
                <p className="text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
