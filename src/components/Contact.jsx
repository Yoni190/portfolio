import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [statusMessage, setStatusMessage] = useState('')
    const [statusType, setStatusType] = useState('')

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceId = 'service_8thgbb9'
        const templateId = 'template_wn3b5pd'
        const autoReplyId = 'template_34l1l2l'
        const publicKey = 'TS7SQRI0b4PCC3l9o'

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then(() => {
                emailjs.send(serviceId, autoReplyId, formData, publicKey)
                .then(() => {
                    setStatusMessage('Message sent successfully!')
                    setStatusType('success')
                    setFormData({name: '', email: '', message: ''})
                })
                .catch(() => {
                    setStatusMessage('Failed to send confirmation email.')
                    setStatusType('error')
                })
            })
            .catch(() => {
                setStatusMessage('Failed to send message. Please try again.')
                setStatusType('error')
            })
    }
  return (
    <div className='py-10 bg-black text-white'>
        <h2 className='text-4xl text-center font-bold'>Contact</h2>
        <p className='text-center text-xl mt-4'>Have a question or want to work together? Leave your <br />details and I'll get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit} className='flex flex-col w-1/4 mx-auto gap-1 mt-2'>
            <input
                type="text"
                name="name"
                id="name"
                placeholder='Name' 
                value={formData.name}
                onChange={handleChange}
                className='border p-2'/>
            <input
                type="email"
                name="email"
                id="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='border p-2'/>
            <textarea
                name="message"
                id="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                className='border p-2 resize-none'
                rows="5">
            </textarea>

            {statusMessage && (
                <p className={`mt-2 ${statusType === 'success' ? 'text-green-400' : 'text-red-500'}`}>
                    {statusMessage}
                </p>
                )}


            <div className='flex justify-end'>
                <button type='submit' className='underline decoration-blue-400 decoration-4 hover:bg-blue-400 hover:text-white transition duration-500 w-fit p-2'>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}

export default Contact