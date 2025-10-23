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
      <Header 
      img="https://i.blogs.es/fb56eb/b-n-silver-efex/1366_2000.webp"
      logo="https://www.corporacionculturaldelobarnechea.cl/content/uploads/2025/07/Logo-cclb-web-180x45-1.png"
      title="Lo Barnechea en Imágenes"
      
      />
     
    </>
  );
}
