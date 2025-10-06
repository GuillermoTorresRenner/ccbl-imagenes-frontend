import { Link, useLocation } from "react-router";
import { useState } from "react";
import {
  MdSearch,
  MdMenu,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  variant?: "default" | "hero" | "minimal";
  showBreadcrumb?: boolean;
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  showSearch?: boolean;
  showCarousel?: boolean;
}

export default function Header({
  title = "Lo Barnechea en Imágenes",
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1554048612-b6ebae896853?w=1200&h=600&fit=crop",
  variant = "default",
  showBreadcrumb = false,
  breadcrumbItems = [],
  showSearch = true,
  showCarousel = true,
}: HeaderProps) {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const slides = [
    {
      title: "Lo Barnechea en Imágenes",
      image:
        "https://images.unsplash.com/photo-1554048612-b6ebae896853?w=1200&h=600&fit=crop",
    },
    {
      title: "Naturaleza y Paisajes",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    },
    {
      title: "Patrimonio Cultural",
      image:
        "https://images.unsplash.com/photo-1571847140471-1d7766e8f2a5?w=1200&h=600&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <header className="relative">
      {/* Navbar Principal - Diseño CCLB */}
      <nav className="bg-cclb-white text-cclb-black shadow-sm border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo CCLB */}
            <Link to="/home" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-cclb-black text-cclb-white rounded flex items-center justify-center group-hover:bg-cclb-yellow group-hover:text-cclb-black transition-colors">
                <span className="font-black text-xl">B</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-roman text-sm text-cclb-black leading-tight">
                  Corporación
                </div>
                <div className="font-roman text-sm text-cclb-black leading-tight">
                  Cultural de
                </div>
                <div className="font-roman text-sm text-cclb-black leading-tight">
                  Lo Barnechea
                </div>
              </div>
            </Link>

            {/* Navigation Links - Centrados */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                to="/familias-artisticas"
                className="font-book text-sm text-cclb-black hover:text-cclb-yellow transition-colors"
              >
                Familias Artísticas
              </Link>
              <Link
                to="/naturaleza"
                className="font-book text-sm text-cclb-black hover:text-cclb-yellow transition-colors"
              >
                Naturaleza
              </Link>
              <Link
                to="/lugares-emblematicos"
                className="font-book text-sm text-cclb-black hover:text-cclb-yellow transition-colors"
              >
                Lugares Emblemáticos
              </Link>
              <Link
                to="/ritos-celebraciones"
                className="font-book text-sm text-cclb-black hover:text-cclb-yellow transition-colors"
              >
                Ritos y Celebraciones
              </Link>
              <Link
                to="/icons"
                className="font-book text-sm text-cclb-black hover:text-cclb-yellow transition-colors"
              >
                Íconos
              </Link>
            </div>

            {/* Search Button */}
            <div className="flex items-center space-x-4">
              {showSearch && (
                <div className="relative">
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="flex items-center space-x-2 text-cclb-black hover:text-cclb-yellow transition-colors"
                  >
                    <MdSearch className="w-5 h-5" />
                    <span className="font-book text-sm hidden sm:inline">
                      Buscar
                    </span>
                  </button>

                  {/* Search Dropdown */}
                  {searchOpen && (
                    <div className="absolute right-0 top-full mt-2 w-80 bg-cclb-white rounded-lg shadow-lg border border-gray-200 p-4">
                      <input
                        type="text"
                        placeholder="Buscar en Lo Barnechea en Imágenes..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cclb-yellow focus:border-transparent font-book text-cclb-black"
                      />
                      <button className="mt-3 w-full bg-cclb-yellow text-cclb-black py-2 rounded-lg font-roman hover:bg-yellow-400 transition-colors">
                        Buscar
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button className="text-cclb-black hover:text-cclb-yellow p-2 transition-colors">
                  <MdMenu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Carrusel CCLB */}
      {variant === "hero" && (
        <div className="relative min-h-[70vh] overflow-hidden">
          {/* Carrusel de Imágenes */}
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "grayscale(70%) contrast(1.1)",
                }}
              >
                {/* Contenido del Slide */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-cclb-white px-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-wider">
                      {slide.title}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de Navegación */}
          {showCarousel && slides.length > 1 && (
            <>
              {/* Flechas */}
              <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-cclb-black bg-opacity-50 hover:bg-opacity-70 text-cclb-white p-3 rounded-full transition-all group z-10"
              >
                <MdChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-cclb-black bg-opacity-50 hover:bg-opacity-70 text-cclb-white p-3 rounded-full transition-all group z-10"
              >
                <MdChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>

              {/* Indicadores de Página */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-cclb-white scale-125"
                        : "bg-cclb-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {variant === "default" && (
        <div className="bg-cclb-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {showBreadcrumb && breadcrumbItems.length > 0 && (
              <nav className="mb-6">
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <span className="mx-2 text-cclb-yellow">/</span>
                      )}
                      {item.href ? (
                        <Link
                          to={item.href}
                          className="font-book hover:text-cclb-yellow transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-cclb-black font-roman">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-black text-cclb-black mb-6 tracking-wide">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg font-book text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {variant === "minimal" &&
        showBreadcrumb &&
        breadcrumbItems.length > 0 && (
          <div className="bg-cclb-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav>
                <ol className="flex items-center space-x-2 text-sm text-gray-500">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <span className="mx-2 text-cclb-yellow">/</span>
                      )}
                      {item.href ? (
                        <Link
                          to={item.href}
                          className="font-book hover:text-cclb-yellow transition-colors"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-cclb-black font-roman">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        )}
    </header>
  );
}
