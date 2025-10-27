import { getHeaders } from "~/api/headers";
import type { Route } from "./+types/home";
import Header from "~/components/Header";
import { getRandomImages } from "~/api/images";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lo Barnechea en Imágenes" },
    { name: "description", content: "Explora imágenes de Lo Barnechea" },
  ];
}
export async function loader() {
  // Obtener imágenes y headers de forma asíncrona
  const [randomImages, headers] = await Promise.all([
    getRandomImages({ count: 1, variant: "full" }),
    getHeaders("Home"),
  ]);
  return {
    randomImages: randomImages[0],
    headers,
  };
}



export default function Home({loaderData}: Route.ComponentProps) {
  const {randomImages, headers } = loaderData;
  const { img, title } = headers;
  console.log(randomImages)
  return (
    <>
      <Header 
      img={img}
      title={title}
      />
     
    </>
  );
}
