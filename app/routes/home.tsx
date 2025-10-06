import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lo Barnechea en Imágenes" },
    { name: "description", content: "Explora imágenes de Lo Barnechea" },
  ];
}

export default function Home() {
  return <Welcome />;
}
