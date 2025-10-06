import type { Route } from "./+types/home";
import Header from "~/components/Header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lo Barnechea en Imágenes" },
    { name: "description", content: "Explora imágenes de Lo Barnechea" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Bienvenido a Lo Barnechea en Imágenes
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Explora una colección curada de imágenes que capturan la esencia y
            belleza de Lo Barnechea.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aquí irían las imágenes */}
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Imagen 1</span>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Imagen 2</span>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Imagen 3</span>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Imagen 4</span>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Imagen 5</span>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <span className="text-gray-500">Imagen 6</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
