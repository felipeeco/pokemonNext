/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pokeapi.co', 'raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',          // La página de inicio
        destination: '/dashboard', // Cambia '/dashboard' por la ruta que prefieras
        permanent: true,      // Si es permanente, devolverá un código 308
      },
    ];
  },
};

export default nextConfig;
