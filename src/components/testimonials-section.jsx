"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Excelente atención. El hotel es muy cálido. Siempre con buena predisposición ante nuestras inquietudes.",
    author: "Prado M.",
    rating: 5
  },
  {
    id: 2,
    text: "El hotel es cómodo, la atención excelente, buen trato, calidez y amabilidad por parte del personal. El ambiente tranquilo, perfecto para descansar.",
    author: "Fajardo D.",
    rating: 5
  },
  {
    id: 3,
    text: "Siempre nos alojamos ahí cuando vamos a asambleas en Miramar y la atención inmejorable. El desayuno exquisito. Todos los empleados buenísimos. Volvemos siempre",
    author: "Di Bello T.",
    rating: 5
  },
  {
    id: 4,
    text: "El hotel es hermoso, muy cómodo, la pasamos muy bien, todo estuvo perfecto. El desayuno muy abundante y la limpieza del hotel muy buena.",
    author: "Minervino F.",
    rating: 5
  },
  {
    id: 5,
    text: "TODO IMPECABLE, RELACIÓN PRECIO/SERVICIO EXCELENTE.",
    author: "Iriart P.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Lo que dicen nuestros huéspedes</h2>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full px-4"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg md:text-xl italic mb-6 text-center">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <p className="text-teal-600 font-medium text-center">— {testimonial.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 md:-translate-x-6"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-teal-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 md:translate-x-6"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="w-6 h-6 text-teal-600" />
            </button>
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="https://www.google.com.ar/maps/place/Hotel+Rinc%C3%B3n+de+Playa/@-38.274157,-57.8363203,17z/data=!4m11!3m10!1s0x95bccb433e223437:0x934c3473a53b64d7!5m2!4m1!1i2!8m2!3d-38.274082!4d-57.8367284!9m1!1b1!16s%2Fg%2F11q92b_h_l?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Ver más opiniones
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}