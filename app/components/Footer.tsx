import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cclb-black text-cclb-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo y información principal */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-cclb-white text-cclb-black rounded flex items-center justify-center">
                <span className="font-black text-xl">B</span>
              </div>
              <div>
                <h3 className="font-roman text-sm leading-tight">
                  Corporación
                </h3>
                <h3 className="font-roman text-sm leading-tight">
                  Cultural de
                </h3>
                <h3 className="font-roman text-sm leading-tight">
                  Lo Barnechea
                </h3>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-cclb-yellow hover:text-cclb-black transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-cclb-yellow hover:text-cclb-black transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-cclb-yellow hover:text-cclb-black transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:bg-cclb-yellow hover:text-cclb-black transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Secciones */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Descubre */}
            <div>
              <h4 className="font-medium text-cclb-white mb-4 uppercase tracking-wide">
                DESCUBRE
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/actividades"
                    className="font-book text-sm text-gray-300 hover:text-cclb-yellow transition-colors"
                  >
                    Actividades
                  </a>
                </li>
                <li>
                  <a
                    href="/exposiciones"
                    className="font-book text-sm text-gray-300 hover:text-cclb-yellow transition-colors"
                  >
                    Exposiciones y Rutas
                  </a>
                </li>
                <li>
                  <a
                    href="/agenda"
                    className="font-book text-sm text-gray-300 hover:text-cclb-yellow transition-colors"
                  >
                    Agenda
                  </a>
                </li>
              </ul>
            </div>

            {/* Conozcamos */}
            <div>
              <h4 className="font-medium text-cclb-white mb-4 uppercase tracking-wide">
                CONOZCAMOS
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/nosotros"
                    className="font-book text-sm text-gray-300 hover:text-cclb-yellow transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/espacios"
                    className="font-book text-sm text-gray-300 hover:text-cclb-yellow transition-colors"
                  >
                    Espacios
                  </a>
                </li>
                <li>
                  <a
                    href="/centro-ayuda"
                    className="font-book text-sm text-gray-300 hover:text-cclb-yellow transition-colors"
                  >
                    Centro de Ayuda
                  </a>
                </li>
              </ul>
            </div>

            {/* Contáctanos */}
            <div>
              <h4 className="font-medium text-cclb-white mb-4 uppercase tracking-wide">
                CONTÁCTANOS
              </h4>
              <div className="space-y-2">
                <p className="font-book text-sm text-gray-300 flex items-center">
                  <MdEmail className="w-4 h-4 mr-2" />
                  cultura@lobarnechea.cl
                </p>
                <p className="font-book text-sm text-gray-300 flex items-center">
                  <MdPhone className="w-4 h-4 mr-2" />
                  +562 2754 3900
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Direcciones de centros */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            {/* Centro Cultural El Tranque */}
            <div>
              <h5 className="font-medium text-cclb-white mb-2">
                Centro Cultural El Tranque
              </h5>
              <p className="font-book text-gray-300 mb-1 flex items-start">
                <MdLocationOn className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                Avenida El Tranque 10.320, Lo Barnechea
              </p>
              <p className="font-book text-gray-300 mb-1 flex items-center">
                <MdEmail className="w-4 h-4 mr-2" />
                centroeltranque@cclb.cl
              </p>
              <p className="font-book text-gray-300 flex items-center">
                <MdPhone className="w-4 h-4 mr-2" />
                +562 2754 3900
              </p>
            </div>

            {/* Centro de las Tradiciones */}
            <div>
              <h5 className="font-medium text-cclb-white mb-2">
                Centro de las Tradiciones
              </h5>
              <p className="font-book text-gray-300 mb-1 flex items-start">
                <MdLocationOn className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                Avenida Lo Barnechea 1.200, Lo Barnechea
              </p>
              <p className="font-book text-gray-300 mb-1 flex items-center">
                <MdEmail className="w-4 h-4 mr-2" />
                centrodelastradiciones@cclb.cl
              </p>
              <p className="font-book text-gray-300 flex items-center">
                <MdPhone className="w-4 h-4 mr-2" />
                +562 2754 3870
              </p>
            </div>

            {/* Centro Lector */}
            <div>
              <h5 className="font-medium text-cclb-white mb-2">
                Centro Lector
              </h5>
              <p className="font-book text-gray-300 mb-1 flex items-start">
                <MdLocationOn className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                Avenida Lo Barnechea 1174
              </p>
              <p className="font-book text-gray-300 mb-1 flex items-center">
                <MdEmail className="w-4 h-4 mr-2" />
                centrolector@cclb.cl
              </p>
              <p className="font-book text-gray-300 flex items-center">
                <MdPhone className="w-4 h-4 mr-2" />
                +562 2754 3820
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="font-light text-xs text-gray-400 uppercase tracking-wider">
            CCLB 2023 - TODOS LOS DERECHOS RESERVADOS
          </p>
        </div>
      </div>
    </footer>
  );
}
