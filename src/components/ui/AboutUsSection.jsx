import React, { useState, useEffect, useRef } from "react"
import {
  Building2,
  ShieldCheck,
  Map,
  Clock,
  Award,
  Users,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
  Truck,
  HardHat,
  Factory
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { Link } from "react-router-dom"

export function AboutUsSection({ transparentBg = false, hideStats = false }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <Factory className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-industrial-400" />,
      title: "Premium Roofing",
      description: "Extensive inventory of Galvalume, AC, and V-Board sheets sourced from trusted, industry-leading manufacturers for maximum durability.",
      position: "left",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-industrial-400" />,
      title: "Structural Steel",
      description: "Robust steel pipes and structural materials in multiple sizes and specifications, engineered for residential, commercial, and heavy industrial use.",
      position: "left",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-industrial-400" />,
      title: "Quality Assurance",
      description: "We believe in providing reliable materials that stand the test of time and weather, ensuring structural integrity for generations.",
      position: "left",
    },
    {
      icon: <HardHat className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-industrial-400" />,
      title: "Expert Guidance",
      description: "Our highly knowledgeable team provides professional, enquiry-based assistance to help you select the precise materials required for your unique project.",
      position: "right",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-industrial-400" />,
      title: "Statewide Supply",
      description: "Based in Madurai, our logistics network efficiently supplies requirements to customers and construction sites across the entirety of Tamil Nadu.",
      position: "right",
    },
    {
      icon: <Map className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-industrial-400" />,
      title: "Complete Range",
      description: "A one-stop solution offering a comprehensive catalogue of roofing sheets, translucent panels, and necessary installation accessories.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 1500, label: "Projects Supplied", suffix: "+" },
    { icon: <Users />, value: 5000, label: "Happy Clients", suffix: "+" },
    { icon: <Clock />, value: 35, label: "Years Heritage", suffix: "+" },
    { icon: <TrendingUp />, value: 100, label: "Quality Focus", suffix: "%" },
  ]

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className={`w-full py-24 px-4 overflow-hidden relative ${transparentBg ? "bg-transparent" : "bg-industrial-50"}`}
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent-500/10 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-industrial-400/10 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-accent-600 font-bold tracking-wider uppercase mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            A.V.G. ARUNAGIRI NADAR SONS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-industrial-900">About Us</h2>
          <motion.div
            className="w-24 h-1 bg-accent-500"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-16 text-industrial-600 text-lg leading-relaxed" variants={itemVariants}>
          We are a premier supplier of high-quality roofing materials, steel structural products, and building accessories in Tamil Nadu. Based in Madurai, we are dedicated to providing durable, top-tier solutions that form the backbone of residential, commercial, industrial, and agricultural structures across the state.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-16">
            {services.filter((s) => s.position === "left").map((s, i) => (
              <ServiceItem key={`left-${i}`} {...s} variants={itemVariants} delay={i * 0.2} direction="left" />
            ))}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0 relative z-20">
            <motion.div className="relative w-full max-w-sm lg:max-w-md xl:max-w-[450px]" variants={itemVariants}>
              <motion.div
                className="rounded-xl overflow-hidden shadow-2xl aspect-[3/4]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="/assets/bk1.png"
                  alt="Industrial Warehouse"
                  className="w-full h-full object-cover object-[15%_center]"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-industrial-900/80 via-industrial-900/20 to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Link to="/products">
                    <motion.button
                      className="bg-white text-industrial-900 px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg hover:bg-industrial-100 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Our Catalogue <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-industrial-300 rounded-xl -m-4 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>
            </motion.div>
          </div>

          <div className="space-y-16">
            {services.filter((s) => s.position === "right").map((s, i) => (
              <ServiceItem key={`right-${i}`} {...s} variants={itemVariants} delay={i * 0.2} direction="right" />
            ))}
          </div>
        </div>

        {!hideStats && (
          <motion.div
            ref={statsRef}
            className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {stats.map((stat, i) => (
              <StatCounter key={i} {...stat} delay={i * 0.1} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }) {
  return (
    <motion.div className="flex flex-col group" variants={variants} transition={{ delay }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div className="flex items-center gap-4 mb-3" initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: delay + 0.2 }}>
        <motion.div className="text-accent-600 bg-accent-50 p-3 rounded-lg transition-colors duration-300 group-hover:bg-accent-100 border border-accent-100 relative" whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}>
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-bold text-industrial-900 group-hover:text-accent-600 transition-colors duration-300">{title}</h3>
      </motion.div>
      <motion.p className="text-sm text-industrial-600 leading-relaxed pl-[3.5rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: delay + 0.4 }}>
        {description}
      </motion.p>
    </motion.div>
  )
}

function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)
  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div className="bg-white p-6 rounded-xl flex flex-col items-center text-center group hover:bg-industrial-50 transition-colors duration-300 border border-industrial-100 shadow-sm hover:shadow-md" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } } }} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <motion.div className="w-16 h-16 rounded-full bg-industrial-100 flex items-center justify-center mb-5 text-accent-600 group-hover:bg-accent-50 transition-colors duration-300" whileHover={{ rotate: 360, transition: { duration: 0.8 } }}>
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-4xl font-black text-industrial-900 flex items-center mb-1">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-industrial-500 font-medium">{label}</p>
      <motion.div className="w-10 h-1 bg-accent-500 mt-4 group-hover:w-16 transition-all duration-300 rounded-full" />
    </motion.div>
  )
}
