import React from 'react'
import HtmlImage from '../assets/html.png'
import CssImage from '../assets/css.png'
import JsImage from '../assets/js.png'
import ReactImage from '../assets/react.svg'
import LaravelImage from '../assets/laravel.svg'
import MysqlImage from '../assets/mysql.png'
import GitImage from '../assets/git.png'

const About = () => {
    const skills = [
        {name: 'HTML', img: HtmlImage},
        {name: 'CSS', img: CssImage},
        {name: 'JS', img: JsImage},
        {name: 'React', img: ReactImage},
        {name: 'Laravel', img: LaravelImage},
        {name: 'MySQL', img: MysqlImage},
        {name: 'React Native', img: ReactImage},
        {name: 'Git', img: GitImage},
    ]

    return (
        <div className='py-20 bg-black text-white'>
            <h2 className='text-4xl text-center font-bold'>About</h2>

            <div className='container mx-auto mt-10 flex flex-col lg:flex-row gap-10 px-5'>
                {/* Paragraph Section */}
                <div className='lg:w-1/2 text-xl leading-relaxed'>
                    <p>
                        I’m Yonatan, a Full Stack Developer passionate about building clean, scalable, and modern web applications.
                        With experience in both frontend and backend technologies, I enjoy turning ideas into interactive, user-friendly solutions.
                        I thrive in problem-solving, love learning new tools and frameworks, and take pride in writing code that is both efficient and maintainable.
                    </p>
                </div>

                {/* Skills Section */}
                <div className='lg:w-1/2 grid grid-cols-2 sm:grid-cols-4 gap-6'>
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className='border rounded p-4 flex flex-col items-center hover:scale-110 hover:shadow-[0_0_20px_rgba(96,165,250,0.7)] transition duration-500'
                        >
                            <img src={skill.img} alt={skill.name} width="50" height="50" loading="lazy" className='mb-2'/>
                            <p className='text-center'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
