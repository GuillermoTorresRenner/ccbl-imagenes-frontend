import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("familia-y-amistad", "routes/FamiliaYamistad.tsx"),
  route("naturaleza", "routes/Naturaleza.tsx"),
  route("lugares-emblematicos", "routes/LugaresEmblematicos.tsx"),
  route("ritos-y-celebraciones", "routes/RitosyCelebraciones.tsx"),
  route("el-proyecto", "routes/ElProyecto.tsx"),
] satisfies RouteConfig;
