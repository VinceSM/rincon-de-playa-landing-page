"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function MapSection() {
  const [isMobile, setIsMobile] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <section id="map" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
            Te esperamos en el Hotel Rincón de Playa
          </h2>
          <h3 className="text-xl md:text-2xl text-teal-600 mb-6">Calle 25 Nº 863. Miramar, Pcia. Buenos Aires</h3>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg"
        >
          <div className={`relative ${isMobile ? "h-[600px]" : "h-[400px]"} w-full`}>
            <Image
              src={isMobile ? "/mapa/map-vertical.jpg" : "/mapa/map.png"}
              alt="Ubicación del Hotel Rincón de Playa"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

