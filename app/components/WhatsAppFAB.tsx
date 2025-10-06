import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppFABProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

const WhatsAppFAB: React.FC<WhatsAppFABProps> = ({
  phoneNumber = "+56927543900",
  message = "Hola, me interesa conocer más sobre los servicios de CCLB Imágenes",
  className = "",
}) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group ${className}`}
      aria-label="Contactar por WhatsApp"
    >
      {/* Ícono de WhatsApp */}
      <FaWhatsapp className="w-8 h-8 group-hover:scale-110 transition-transform" />

      {/* Tooltip opcional */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chatea con nosotros
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </button>
  );
};

export default WhatsAppFAB;
