import React from "react"
import { AboutUsSection } from "../components/ui/AboutUsSection"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function About() {
  return (
    <div className="bg-industrial-50 min-h-screen relative z-0 pt-[90px]">
      {/* Background Image with Low Opacity */}
      <div 
        className="absolute inset-0 -z-10 bg-[url('/images/about-team-bg.jpg')] bg-cover bg-center bg-fixed opacity-[0.10]"
      />
      <AboutUsSection transparentBg={true} />
      
      {/* CTA Section (Specific to About page) */}
      <div className="container mx-auto max-w-6xl px-4 pb-24">
        <motion.div
          className="bg-industrial-900 text-white p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="flex-1 relative z-10">
            <h3 className="text-3xl font-bold mb-3">Ready to source the best materials?</h3>
            <p className="text-industrial-300 text-lg">Contact our team in Madurai for quotes, bulk orders, and expert advice.</p>
          </div>
          <Link to="/contact" className="relative z-10 w-full md:w-auto">
            <motion.button
              className="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg flex justify-center items-center gap-2 font-bold transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
