import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';

interface HeaderProps {
  title: string;
  logo: string;
  img: string;
}

const menuItems = [
  { name: "Familia y Amistad", path: "/familia-y-amistad" },
  { name: "Naturaleza", path: "/naturaleza" },
  { name: "Lugares Emblemáticos", path: "/lugares-emblematicos" },
  { name: "Ritos y Celebraciones", path: "/ritos-y-celebraciones" },
  { name: "El Proyecto", path: "/el-proyecto" }
];

const Header = ({ title, logo, img }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    console.log("Buscar:", searchValue);
  };
  return (
    <header
      className="w-full px-4 md:px-10 py-6 flex flex-col min-h-[320px] md:min-h-[512px] relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay para oscurecer la imagen y mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="flex flex-col items-center md:items-start w-full relative z-10 h-full">
        {/* Logo arriba */}
        <div className="flex items-end gap-4 w-full pt-2 md:pt-0">
          <img src={logo} alt="Logo" className="h-10 md:h-12 invert" />
        </div>

        {/* Menú hamburguesa en mobile, fijo arriba derecha */}
        <div className="md:hidden">
          <button
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="text-white text-3xl focus:outline-none fixed top-6 right-6 z-30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Menú normal en desktop debajo del logo, alineado a la derecha */}
        <nav className="hidden md:flex items-center gap-10 w-full mt-6 justify-end">
          <ul className="flex gap-10 text-white text-xs md:text-base font-medium justify-end">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `hover:underline cursor-pointer transition-colors duration-200 ${isActive ? 'font-bold underline' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="relative ml-6">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Buscar"
              className="pl-7 pr-2 py-1 rounded bg-white text-gray-800 text-xs border border-gray-300 focus:outline-none w-20"
            />
          </div>
        </nav>

        {/* Título debajo del menú en desktop, alineado a la izquierda */}
        <h1 className="text-white text-3xl md:text-[64px] font-bold mt-8 md:mt-12 w-full md:w-[480px] leading-[1.1] text-center md:text-left whitespace-pre-line">
          {title}
        </h1>

        {/* Menú desplegable en mobile, baja desde el ícono */}
        {menuOpen && (
          <nav className="md:hidden fixed top-0 right-0 w-full h-full bg-black/80 z-20 flex flex-col">
            <div className="flex justify-end">
              <button
                aria-label="Cerrar menú"
                className="text-white text-3xl focus:outline-none mt-6 mr-6"
                onClick={() => setMenuOpen(false)}
              >
                <FiX />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
              <ul className="flex flex-col gap-6 text-white text-lg font-medium mb-6">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `hover:underline cursor-pointer transition-colors duration-200 ${isActive ? 'font-bold underline' : ''}`
                      }
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="relative w-3/4 flex flex-col items-center gap-2">
                <input
                  type="text"
                  placeholder="Buscar"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  className="pl-10 pr-2 py-2 rounded bg-white text-gray-800 text-base border border-gray-300 focus:outline-none w-full"
                />
           
                <button
                  className="mt-2 px-2 py-2 bg-yellow-400 text-black font-bold rounded shadow hover:bg-yellow-300 transition-colors w-1/2"
                  onClick={handleSearch}
                >
                  Buscar
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header