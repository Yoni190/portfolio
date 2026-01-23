import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

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
            setFormData({ name: '', email: '', message: '' })
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
    <section ref={sectionRef} className="py-10 bg-black text-white px-4">
      {/* Animated content only */}
      <div
        className={`transition-all duration-700 ease-out
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Contact
        </h2>

        <p className="text-center text-lg md:text-xl mt-4 px-4">
          Have a question or want to work together?
          <span className="hidden md:inline"><br /></span>{' '}
          Leave your details and I'll get back to you as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto gap-3 mt-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-600 bg-gray-900 text-white p-3 rounded
              focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-600 bg-gray-900 text-white p-3 rounded
              focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="border border-gray-600 bg-gray-900 text-white p-3 rounded resize-none
              focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            required
          />

          {statusMessage && (
            <p
              className={`mt-2 text-sm md:text-base ${
                statusType === 'success'
                  ? 'text-green-400'
                  : 'text-red-500'
              }`}
            >
              {statusMessage}
            </p>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="underline decoration-blue-400 decoration-4
                hover:bg-blue-400 hover:text-white
                transition duration-500 w-fit p-2 rounded"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
