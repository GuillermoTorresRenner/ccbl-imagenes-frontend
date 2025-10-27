// Configuración de la aplicación
export const config = {
  // API Configuration
  api: {
    baseURL: "http://localhost:3000/api", // Strapi API endpoint
    timeout: 10000, // 10 segundos
  },

  // Environment settings
  environment: {
    isDevelopment: process.env.NODE_ENV === "development",
    isProduction: process.env.NODE_ENV === "production",
  },
};

export default config;
