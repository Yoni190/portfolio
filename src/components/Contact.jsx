import React from 'react'

const Contact = () => {
  return (
    <div className='mt-4'>
        <h2 className='text-2xl text-center'>Contact</h2>
        <p className='text-center text-xl mt-4'>Have a question or want to work together? Leave your <br />details and I'll get back to you as soon as possible.</p>

        <form action="" className='flex flex-col w-1/4 mx-auto gap-1 mt-2'>
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Name' 
                className='border p-2'/>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='Email'
                className='border p-2'/>
            <textarea
                name="message"
                id="message"
                placeholder='Message'
                className='border p-2 resize-none'
                rows="5">
            </textarea>


            <div className='flex justify-end'>
                <a href="#" target='_blank' className='underline decoration-blue-400 decoration-4 hover:bg-blue-400 hover:text-white transition duration-500 w-fit p-2'>SUBMIT</a>
            </div>
        </form>
    </div>
  )
}

export default Contact