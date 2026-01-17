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
    <div className='mt-10'>
        <h2 className='text-4xl text-center'>About</h2>

        <div className='flex justify-center gap-3 mt-5'>
            {/* Paragraph Section */}
            <div className='w-1/2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sunt debitis ratione voluptates, odio iusto voluptatem dicta doloribus veritatis ab fuga non nobis enim recusandae, ex eius ad, quis facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic quae tempora accusantium nostrum veniam nam totam blanditiis ullam voluptatem temporibus tempore nesciunt a eos veritatis enim soluta, ipsa nemo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo esse quia atque aspernatur, nesciunt quaerat dignissimos? Libero sequi dolores minus ut architecto voluptate incidunt nam culpa, itaque ad rem eligendi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione laudantium id quas fugit error, excepturi et ipsum iure nam magni, obcaecati similique at commodi iste, ipsa mollitia ipsam. Eius, dolor.
            </div>
            {/* Skills section */}
            <div className='flex gap-5  grid grid-cols-4'>
                {skills.map((skill) => (
                    <div key={skill.name} className='border rounded p-4 flex flex-col items-center hover:shadow-xl transition duration-500'>
                        <img src={skill.img} alt={skill.name} width="50"/>
                        <p className='text-center'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About