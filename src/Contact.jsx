import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

function Contact() {
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setResult({ ok: false, msg: 'Email service not configured properly.' })
      return
    }

    const form = e.currentTarget
    const payload = {
      from_name: form.name.value,
      from_email: form.email.value,
      message: form.message.value,
      to_email: 'varunselvakumar6@gmail.com', // Your email
    }

    try {
      setSending(true)
      await emailjs.send(serviceId, templateId, payload, publicKey)
      setResult({ ok: true, msg: 'Message sent successfully!' })
      form.reset()
    } catch {
      setResult({ ok: false, msg: 'Failed to send message. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="container fw-bold" id="contact" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="row justify-content-center">
        <div className="col-lg-8 themed-card p-4">
          <h2 className="project-heading">Get In Touch</h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="Your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" className="form-control" placeholder="you@example.com" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" className="form-control" rows="5" placeholder="Say hello" required />
            </div>

            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {result && (
            <div className={`alert mt-3 ${result.ok ? 'alert-success' : 'alert-danger'}`} role="alert">
              {result.msg}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Contact
