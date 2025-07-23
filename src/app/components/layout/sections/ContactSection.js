"use client"
import { useState } from 'react'
import { COMPANY_INFO } from '@/app/data/constants'
import { Button } from '../ui/button'
import { Input, Textarea } from '../ui/input'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Ready to transform your data infrastructure? Contact us today for a consultation tailored to your business
            needs.
          </p>

          <div className="bg-slate-900/50 border border-cyan-500/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">Or reach us directly:</p>
            <div className="space-y-2">
              <p className="text-cyan-400">{COMPANY_INFO.email}</p>
              <p className="text-cyan-400">{COMPANY_INFO.phone}</p>
              <p className="text-gray-300">{COMPANY_INFO.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}