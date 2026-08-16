import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MessageCircle, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    productCategory: '',
    product: '',
    quantity: '',
    requirements: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const waText = `*New Quote Enquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Location:* ${formData.location}\n` +
      `*Product Category:* ${formData.productCategory}\n` +
      `*Product:* ${formData.product}\n` +
      `*Quantity:* ${formData.quantity}\n` +
      `*Requirements:* ${formData.requirements}\n` +
      `*Message:* ${formData.message}\n`;

    const encodedText = encodeURIComponent(waText);
    window.open(`https://wa.me/919842874256?text=${encodedText}`, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-industrial-50 min-h-screen py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm mb-4 text-accent-500">
            <FileText size={32} />
          </div>
          <SectionHeading 
            title="Request a Quote" 
            subtitle="Fill out the form below to get a customized quote for your requirements."
            center
            className="mb-0"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm border border-industrial-200 p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                  placeholder="Enter your name"
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
                  className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-1">Location / Project Site *</label>
              <input 
                type="text" 
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                placeholder="City or District in Tamil Nadu"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-1">Product Category</label>
                <select 
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500"
                >
                  <option value="">Select Category</option>
                  <option value="Roofing Sheets">Roofing Sheets</option>
                  <option value="Polycarbonate Products">Polycarbonate Products</option>
                  <option value="FRP Products">FRP Products</option>
                  <option value="Steel Pipes">Steel Pipes</option>
                  <option value="Roofing Accessories">Roofing Accessories</option>
                  <option value="Rainwater Management">Rainwater Management</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-1">Specific Product (Optional)</label>
                <input 
                  type="text" 
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                  placeholder="e.g. Galvalume Sheet"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-1">Approximate Quantity</label>
                <input 
                  type="text" 
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                  placeholder="e.g. 50 sheets, 1000 sq.ft"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-industrial-700 mb-1">Specific Requirements</label>
                <input 
                  type="text" 
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                  placeholder="e.g. 0.5mm thickness, Blue color"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-industrial-700 mb-1">Additional Message</label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-industrial-300 rounded-md focus:ring-accent-500 focus:border-accent-500" 
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-md transition-colors shadow-md"
            >
              <MessageCircle size={24} />
              Send Request via WhatsApp
            </button>
            <p className="text-center text-xs text-industrial-500 mt-4">
              Clicking this button will open WhatsApp with your formatted enquiry.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
