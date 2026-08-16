import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate frontend validation and success
    setSubmitted(true);
    // In a real scenario without backend, we can also trigger WhatsApp here, 
    // but the spec asked for options after successful validation.
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-industrial-50 min-h-screen relative z-0 pt-[90px]">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center bg-fixed opacity-[0.25]"
      />
      {/* Premium Contact Header */}
      <div className="relative bg-industrial-950 pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden border-b border-industrial-800">
        {/* Decorative Gradients & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-900 via-industrial-950 to-black z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[100px] -mr-64 -mt-64 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -ml-40 -mb-40 z-0 pointer-events-none" />
        
        {/* Floating Icons Background */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] text-accent-500/10 z-0 pointer-events-none"
        >
          <Phone size={80} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} 
          transition={{ duration: 10, repeat: Infinity, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-4 right-[15%] text-white/5 z-0 pointer-events-none"
        >
          <MapPin size={120} />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
            className="w-14 h-14 bg-accent-500 rounded-xl rotate-3 flex items-center justify-center mb-4 shadow-xl shadow-accent-500/30"
          >
            <MessageCircle size={28} className="text-white -rotate-3" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
          >
            Let's Connect
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-industrial-300 text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Get in touch with <span className="text-white font-bold">A.V.G. Arunagiri Nadar Sons</span> for all your roofing and building material needs across Tamil Nadu.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div>
            <SectionHeading 
              title="Get in Touch" 
              subtitle="Visit our showroom or reach out via phone, email, or WhatsApp."
            />
            
            <div className="space-y-8 mt-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-industrial-50 rounded-full flex items-center justify-center text-accent-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-industrial-900 mb-1">Showroom Address</h4>
                  <p className="text-industrial-600 leading-relaxed">
                    A.V.G. Arunagiri Nadar Sons<br />
                    Madurai, Tamil Nadu<br />
                    (Serving Entire Tamil Nadu)
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-industrial-50 rounded-full flex items-center justify-center text-accent-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-industrial-900 mb-1">Phone Number</h4>
                  <p className="text-industrial-600 mb-2">For immediate assistance and enquiries.</p>
                  <a href="tel:+919842874256" className="text-accent-600 font-bold hover:text-accent-700 transition-colors">
                    +91 9842874256
                  </a>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-industrial-50 rounded-full flex items-center justify-center text-accent-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-industrial-900 mb-1">Email Address</h4>
                  <p className="text-industrial-600 mb-2">Send us your requirements or tender documents.</p>
                  <a href="mailto:avgaraj@gmail.com" className="text-accent-600 font-bold hover:text-accent-700 transition-colors">
                    avgaraj@gmail.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl border border-white/50 shadow-sm">
              <h3 className="text-2xl font-bold text-industrial-900 mb-6">Send an Enquiry</h3>
              
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-6 rounded-lg text-center"
                >
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-industrial-900 mb-2">Thank you!</h4>
                  <p className="text-industrial-600 mb-6">Your enquiry details have been prepared. How would you like to proceed?</p>
                  
                  <div className="flex flex-col gap-3">
                    <a 
                      href={`https://wa.me/919842874256?text=${encodeURIComponent(`Enquiry from ${formData.name}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-md font-bold transition-colors"
                    >
                      <MessageCircle size={20} />
                      Send via WhatsApp
                    </a>
                    <a 
                      href="tel:+919842874256"
                      className="flex items-center justify-center gap-2 bg-industrial-900 hover:bg-industrial-800 text-white py-3 rounded-md font-bold transition-colors"
                    >
                      <Phone size={20} />
                      Call Us Now
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-industrial-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-industrial-700 mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-industrial-700 mb-1">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      placeholder="What is your enquiry about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-industrial-700 mb-1">Message *</label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                      placeholder="Please detail your requirements..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-industrial-900 hover:bg-industrial-800 text-white font-bold py-4 rounded-md transition-colors"
                  >
                    Proceed <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-96 bg-industrial-100 flex items-center justify-center border-t border-industrial-200 relative">
        <div className="absolute inset-0 flex items-center justify-center flex-col text-industrial-500">
          <MapPin size={48} className="mb-4 opacity-50" />
          <p className="font-semibold text-lg">Google Maps Placeholder</p>
          <p className="text-sm mt-2">Map will be updated once exact location is provided.</p>
        </div>
      </div>
    </div>
  );
}

const ArrowRight = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);
