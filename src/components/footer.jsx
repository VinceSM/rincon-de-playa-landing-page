export default function Footer() {
    return (
      <footer className="bg-teal-500 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Hotel Rincón de Playa. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }