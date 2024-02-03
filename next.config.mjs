/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/cad-acesso',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
