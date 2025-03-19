"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Estilos específicos para móvil y escritorio
  const backgroundStyles = isMobile
    ? {
        backgroundImage: `url('/back/backCel.png')`,
        backgroundSize: "120%", // Zoom reducido para móvil
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }
    : {
        backgroundImage: `url('/back/backPc.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }

  // Estilos específicos para el overlay
  const overlayStyles = isMobile
    ? {
        background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)",
      }
    : {
        backgroundColor: "rgba(0,0,0,0.4)",
      }

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={backgroundStyles}
    >
      {/* Overlay personalizado */}
      <div className="absolute inset-0" style={overlayStyles} />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Bienvenidos al Hotel Rincón de Playa
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-lg">
            Tu refugio perfecto a solo 250 metros de la playa en Miramar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="bg-teal-500 hover:bg-teal-400 md:hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors shadow-md"
            >
              Reserva Ahora
            </Link>
            <Link
              href="#services"
              className="bg-white hover:bg-gray-200 md:hover:bg-gray-100 text-teal-600 px-8 py-3 rounded-md font-medium text-lg transition-colors shadow-md"
            >
              Nuestros Servicios
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#services" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

