import HeroSection from "../components/hero-section.jsx";
import ServicesSection from "../components/services-section";
import GallerySection from "../components/gallery-section";
import TestimonialsSection from "../components/testimonials-section.jsx";
import ContactSection from "../components/contact-section.jsx";
import MapSection from "../components/map-section.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import ScrollToTopButton from "../components/scroll-to-top-button.jsx";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <MapSection />
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}