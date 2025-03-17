"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Instagram, Facebook, Phone } from 'lucide-react';
import Link from "next/link";

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-teal-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RESERVA AQUÍ</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Puedes seguirnos y contactarnos a través de nuestras redes sociales:
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={socialVariants}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <Link
                href="https://www.instagram.com/hotelrincondeplaya"
                target="_blank"
                className="flex flex-col items-center p-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors w-full"
              >
                <Instagram size={36} className="mb-3" />
                <span className="text-lg font-medium">Instagram</span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <Link
                href="https://wa.me/5492291432515"
                target="_blank"
                className="flex flex-col items-center p-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors w-full"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="36" 
                  height="36" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="mb-3"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
                </svg>
                <span className="text-lg font-medium">WhatsApp</span>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <Link
                href="https://www.facebook.com/hotelrincondeplaya"
                target="_blank"
                className="flex flex-col items-center p-6 bg-white/10 hover:bg-white/20 rounded-lg transition-colors w-full"
              >
                <Facebook size={36} className="mb-3" />
                <span className="text-lg font-medium">Facebook</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center"
          >
            <div className="flex items-center bg-white/10 p-4 rounded-lg">
              <Phone size={24} className="mr-3" />
              <span className="text-lg font-medium">+54 9 2291 43-2515</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}