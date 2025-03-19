"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-teal-500/95 shadow-md py-2" : "bg-teal-500 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
          <Image 
            src="/icon/IconHotel_white.png" 
            alt="Logo del Hotel Rincón de Playa"
            fill
            className="object-contain"
          />
          </div>
          <h1 className="hidden md:block text-white font-bold text-xl ml-4">Hotel Rincón de Playa</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="#services" 
                className="text-white hover:text-teal-100 transition-colors"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="#gallery" 
                className="text-white hover:text-teal-100 transition-colors"
              >
                Galería
              </Link>
            </li>
            <li>
              <Link 
                href="#testimonials" 
                className="text-white hover:text-teal-100 transition-colors"
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="text-white hover:text-teal-100 transition-colors"
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link 
                href="#map" 
                className="text-white hover:text-teal-100 transition-colors"
              >
                Ubicación
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="bg-white text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-md font-medium transition-colors"
              >
                Reservas
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-teal-500 absolute top-full left-0 right-0 shadow-lg animate-fadeIn">
          <ul className="flex flex-col py-4">
            <li>
              <Link 
                href="#services" 
                className="block py-3 px-6 text-white hover:bg-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="#gallery" 
                className="block py-3 px-6 text-white hover:bg-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>
            </li>
            <li>
              <Link 
                href="#testimonials" 
                className="block py-3 px-6 text-white hover:bg-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonios
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block py-3 px-6 text-white hover:bg-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link 
                href="#map" 
                className="block py-3 px-6 text-white hover:bg-teal-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ubicación
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block mx-6 my-3 bg-white text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-md font-medium text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservas
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}