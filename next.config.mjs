/** @type {import('next').NextConfig} */
const nextConfig = {};
export async function redirects() {
  return [
    {
      source: '/',
      destination: '/cad-acesso',
      permanent: true,
    },
  ];
}

export default nextConfig;
