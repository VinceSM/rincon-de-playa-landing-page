"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from 'lucide-react';
import Image from "next/image";

// Definimos la interfaz para el tipo de imagen
interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

// Categorías de imágenes
const galleryCategories = [
  {
    id: "exteriores",
    title: "Exteriores",
    images: [
      {
        src: "/exterior/exterior1.jpg", // Ruta corregida
        alt: "Vista exterior del hotel",
        caption: "Vista exterior del hotel"
      },
      {
        src: "/exterior/exterior2.png", // Ruta corregida
        alt: "Recepción 24hs",
        caption: "Recepcion 24hs"
      }
    ]
  },
  {
    id: "interiores",
    title: "Interiores",
    images: [
      {
        src: "/interiorLobby/lobbyRecepcion.png", // Ruta corregida
        alt: "Lobby del hotel",
        caption: "Lobby Recepción"
      },
      {
        src: "/interiorLobby/lobbyDesayuno.png", // Ruta corregida
        alt: "Lobby decorado",
        caption: "Lobby Desayuno"
      }
    ]
  },
  {
    id: "desayuno",
    title: "Desayuno Buffet",
    images: [
      {
        src: "/breakfast/breakfast2.png", // Ruta corregida
        alt: "Desayuno buffet del hotel",
        caption: "Café, leche, cereales, cacao, yogur, jugo, variedades de té"
      },
      {
        src: "/breakfast/breakfast1.png", // Ruta corregida
        alt: "Variedad en el desayuno",
        caption: "Frutas, mermeladas, budin, cookies, productos de panadería, galletas de arroz"
      }
    ]
  },
  {
    id: "habitaciones",
    title: "Habitaciones",
    subtitle: "Planta Baja y Primer Piso",
    images: [
      {
        src: "/rooms/room1.png", // Ruta corregida
        alt: "Habitación Cuádruple Familiar",
        caption: "Habitación Cuádruple Familiar"
      },
      {
        src: "/rooms/room2.png", // Ruta corregida
        alt: "Habitación Doble Matrimonial",
        caption: "Habitación Doble Matrimonial"
      },
      {
        src: "/rooms/room3.png", // Ruta corregida
        alt: "Habitación Doble Individual",
        caption: "Habitación Doble Individual"
      }
    ]
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Galería del Hotel</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras instalaciones y servicios a través de nuestra galería de imágenes
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {galleryCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-2xl font-semibold text-teal-700 mb-4 text-center">{category.title}</h3>
              {category.subtitle && (
                <h4 className="text-xl text-teal-600 mb-6 text-center">{category.subtitle}</h4>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div 
                      className="relative h-64 cursor-pointer"
                      onClick={() => openLightbox(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"} // Ruta corregida
                        alt={image.alt || "Imagen de galería"}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-gray-700 text-center">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <div 
            className="relative max-w-4xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[70vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"} // Ruta corregida
                alt={selectedImage.alt || "Imagen de galería"}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-white p-4 text-center">
              <p className="text-gray-800 text-lg">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}