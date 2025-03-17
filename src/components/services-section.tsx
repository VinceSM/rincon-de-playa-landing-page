"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wifi, Coffee, AirVent, Clock, ShieldCheck, Refrigerator } from 'lucide-react';
import { ReactNode } from "react";

// Definimos la interfaz para las propiedades de ServiceCard
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variants: Variants;
}

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="services" className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Situado a solo 250 metros de la PLAYA y 200 metros de la Peatonal. El hotel de 2 estrellas cuenta con 18 habitaciones.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ServiceCard 
            icon={<AirVent className="w-10 h-10 text-teal-500" />}
            title="Habitaciones Confortables"
            description="Todas las habitaciones cuentan con AIRE ACONDICIONADO FRÍO-CALOR, caja de seguridad, TV con cable."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon={<Wifi className="w-10 h-10 text-teal-500" />}
            title="Wi-Fi Gratuito"
            description="Conexión Wi-Fi gratuita en todas las áreas del hotel para que siempre estés conectado."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon={<Coffee className="w-10 h-10 text-teal-500" />}
            title="Desayuno Buffet"
            description="Desayuno buffet que incluye frutas, jugos, cereales, yogur, café, leche, variedades de té, mermeladas, productos de panadería, etc."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon={<Clock className="w-10 h-10 text-teal-500" />}
            title="Servicio 24 Horas"
            description="Conserjería 24 horas y servicio de limpieza diario para tu comodidad."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon={<Refrigerator className="w-10 h-10 text-teal-500" />}
            title="Comodidades Adicionales"
            description="Pava Eléctrica, heladera y microondas a disposición para todos los huéspedes."
            variants={itemVariants}
          />
          
          <ServiceCard 
            icon={<ShieldCheck className="w-10 h-10 text-teal-500" />}
            title="Guardaequipaje"
            description="Servicio de guardaequipaje disponible para que puedas disfrutar de tu estadía sin preocupaciones."
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, variants }: ServiceCardProps) {
  return (
    <motion.div
      variants={variants}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-teal-700 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}